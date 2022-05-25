import ReactDatePicker from 'react-datepicker'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import dayjs from 'dayjs'
import { useEffect, useMemo } from 'react'

import { useAppSelector } from 'hooks/useAppSelector'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { getMediaDataApi, getTrendDataApi } from 'services/getData'
import { selectedDate, setStartDate } from 'states/storedDate'
import { trendDataSum } from 'states/trendData'
import { getWeeklyTrendData } from 'states/weeklyTrendData'
import { getMediaData } from 'states/mediaData'

import 'react-datepicker/dist/react-datepicker.css'
import styles from './datePicker.module.scss'

dayjs.extend(utc)
dayjs.extend(timezone)

const DatePicker = () => {
  const defaultDate = useAppSelector(selectedDate)
  const dispatch = useAppDispatch()

  const StartDate = useMemo(() => {
    return new Date(defaultDate.startDate)
  }, [defaultDate.startDate])

  const EndDate = useMemo(() => {
    return new Date(defaultDate.endDate)
  }, [defaultDate.endDate])

  const minDate = new Date('2022-02-08')
  const maxDate = new Date('2022-04-14')

  const handleSetDate = (date: Date) => {
    dispatch(setStartDate(date))
  }

  useEffect(() => {
    getTrendDataApi().then((res) => {
      dispatch(
        trendDataSum({
          data: res.data,
          startDate: dayjs(StartDate).format('YYYY-MM-DD'),
          endDate: dayjs(EndDate).format('YYYY-MM-DD'),
          prevStart: dayjs(StartDate).subtract(7, 'd').format('YYYY-MM-DD'),
          prevEnd: dayjs(EndDate).subtract(7, 'd').format('YYYY-MM-DD'),
        })
      )
      dispatch(
        getWeeklyTrendData({
          data: res.data,
          startDate: dayjs(StartDate).format('YYYY-MM-DD'),
          endDate: dayjs(EndDate).format('YYYY-MM-DD'),
        })
      )
    })
  }, [EndDate, StartDate, dispatch])

  useEffect(() => {
    getMediaDataApi().then((res) => {
      dispatch(
        getMediaData({
          data: res.data,
          startDate: dayjs(StartDate).format('YYYY-MM-DD'),
          endDate: dayjs(EndDate).format('YYYY-MM-DD'),
        })
      )
    })
  }, [dispatch, EndDate, StartDate])

  return (
    <>
      <ReactDatePicker
        className={styles.datePicker}
        selected={StartDate}
        onChange={handleSetDate}
        selectsStart
        startDate={StartDate}
        endDate={EndDate}
        minDate={minDate}
        maxDate={maxDate}
        dateFormat='yyyy년 MM월 dd일'
      />
      <p className={styles.p}>~</p>
      <ReactDatePicker
        className={styles.datePicker}
        selected={EndDate}
        onChange={() => EndDate}
        selectsEnd
        disabled
        dateFormat='yyyy년 MM월 dd일'
      />
    </>
  )
}

export default DatePicker

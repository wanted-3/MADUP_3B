import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './datePicker.module.scss'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { getTrendDataApi } from 'services/temp'
import { trendDataSum } from 'states/dailyTrendData'
import { selectedDate, setStartDate } from 'states/storedDate'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { useEffect, useMemo } from 'react'
import { temp } from 'states/weeklyTrendData'

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
        temp({
          data: res.data,
          startDate: dayjs(StartDate).format('YYYY-MM-DD'),
          endDate: dayjs(EndDate).format('YYYY-MM-DD'),
        })
      )
    })
  }, [EndDate, StartDate, dispatch])

  return (
    <>
      <ReactDatePicker
        className={styles.datePicker}
        selected={StartDate}
        onChange={(date: Date) => {
          dispatch(setStartDate(date))
        }}
        selectsStart
        startDate={StartDate}
        endDate={EndDate}
        minDate={new Date('2022-02-08')}
        maxDate={new Date('2022-04-14')}
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

import store from 'store'
import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './datePicker.module.scss'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

const DatePicker = () => {
  const storedStartDate = store.get('startDate') || '2022/02/01'
  const storedEndDate = store.get('endDate') || '2022/02/07'
  const [startDate, setStartDate] = useState(storedStartDate)
  const [endDate, setEndDate] = useState(storedEndDate)

  const formatDate = (date: Date) => {
    return dayjs(date).tz('Asia/Seoul').format('YYYY/MM/DD')
  }

  return (
    <>
      <ReactDatePicker
        className={styles.datePicker}
        selected={new Date(startDate)}
        onChange={(date: Date) => {
          setStartDate(date)
          store.set('startDate', formatDate(date))
        }}
        selectsStart
        startDate={new Date(startDate)}
        endDate={new Date(endDate)}
        minDate={new Date('2022/02/01')}
        dateFormat='yyyy년 MM월 dd일'
      />
      <p className={styles.p}>~</p>
      <ReactDatePicker
        className={styles.datePicker}
        selected={new Date(endDate)}
        onChange={(date: Date) => {
          setEndDate(date)
          store.set('endDate', formatDate(date))
        }}
        selectsEnd
        startDate={new Date(startDate)}
        endDate={new Date(endDate)}
        minDate={new Date(startDate)}
        maxDate={new Date('2022/04/20')}
        dateFormat='yyyy년 MM월 dd일'
      />
    </>
  )
}

export default DatePicker

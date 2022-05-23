import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
// import CustomInput from './CustomInput'
import 'react-datepicker/dist/react-datepicker.css'

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date('2022/02/01'))
  const [endDate, setEndDate] = useState(new Date('2022/04/20'))
  return (
    <>
      <ReactDatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={new Date('2022/02/01')}
        dateFormat='yyyy-MM-dd'
        // customInput={<CustomInput />}
      />
      <span>~</span>
      <ReactDatePicker
        selected={endDate}
        onChange={(date: Date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        maxDate={new Date('2022/04/20')}
        dateFormat='yyyy-MM-dd'
      />
    </>
  )
}

export default DatePicker

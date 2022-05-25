import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

import type { RootState } from '.'

interface IDate {
  value: {
    startDate: string
    endDate: string
  }
}

const INITIAL_STATE: IDate = {
  value: {
    startDate: '2022-02-08',
    endDate: '2022-02-14',
  },
}

const systemSlice = createSlice({
  name: 'storedDate',
  initialState: INITIAL_STATE,
  reducers: {
    setStartDate: (state, action) => {
      const startDate = action.payload
      const endDate = dayjs(startDate).add(6, 'd').format('YYYY-MM-DD')
      state.value.startDate = startDate
      state.value.endDate = endDate
    },
  },
})

export const { setStartDate } = systemSlice.actions

export default systemSlice.reducer

export const selectedDate = (state: RootState) => state.storedDate.value

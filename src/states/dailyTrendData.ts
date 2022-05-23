import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '.'

export interface Idaily {
  imp: number
  click: number
  cost: number
  conv: number
  convValue: number
  ctr: number
  cvr: number
  cpc: number
  cpa: number
  roas: number
  date: string
}

export interface trendState {
  value: {
    report: {
      daily: Idaily[]
    }
  }
}

const trendSlice = createSlice({
  name: 'dailyTrendData',
  initialState: {} as trendState,
  reducers: {
    temp: (state, action) => {
      state.value = action.payload
    },
    testReduce: (state, action) => {
      state.value.report.daily = state.value.report.daily.filter((el) => {
        return el.date === action.payload
      })
    },

    resetTrendData: () => {},
  },
})

export const { temp, testReduce, resetTrendData } = trendSlice.actions

export default trendSlice.reducer

export const trendData = (state: RootState) => state.dailyTrendData.value

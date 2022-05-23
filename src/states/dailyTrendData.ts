import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '.'

const dummy = {
  report: {
    daily: [
      {
        imp: 51479,
        click: 559,
        cost: 371790,
        conv: 37,
        convValue: 3668610,
        ctr: 1.09,
        cvr: 6.62,
        cpc: 665.1,
        cpa: 10048.38,
        roas: 986.74,
        date: '2022-02-01',
      },
    ],
  },
}

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

const INITIAL_STATE: trendState = {
  value: dummy,
}
const trendSlice = createSlice({
  name: 'dailyTrendData',
  initialState: INITIAL_STATE,
  reducers: {
    testReduce: (state, action) => {
      state.value = action.payload
    },

    resetTrendData: () => INITIAL_STATE,
  },
})

export const { testReduce, resetTrendData } = trendSlice.actions

export default trendSlice.reducer

export const trendData = (state: RootState) => state.dailyTrendData.value

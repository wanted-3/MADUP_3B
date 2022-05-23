import { createSlice } from '@reduxjs/toolkit'
import { getMinus, getPlus } from 'utils/num'

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

export interface ITrendResult {
  roas: number
  cost: number
  imp: number
  click: number
  conv: number
  convValue: number
  tRoas: number
  tCost: number
  tImp: number
  tClick: number
  tConv: number
  tConvValue: number
}

export interface trendState {
  value: ITrendResult
}

const INITIAL_STATE: trendState = {
  value: {
    roas: 0,
    cost: 0,
    imp: 0,
    click: 0,
    conv: 0,
    convValue: 0,
    tRoas: 0,
    tCost: 0,
    tImp: 0,
    tClick: 0,
    tConv: 0,
    tConvValue: 0,
  },
}

const trendSlice = createSlice({
  name: 'dailyTrendData',
  initialState: INITIAL_STATE,
  reducers: {
    trendDataSum: (state, action) => {
      const actionData = action.payload.data.report.daily.filter(
        (el: Idaily) =>
          action.payload.startDate.valueOf() <= el.date.valueOf() &&
          el.date.valueOf() <= action.payload.endDate.valueOf()
      )
      const prevData = action.payload.data.report.daily.filter(
        (el: Idaily) =>
          action.payload.prevStart.valueOf() <= el.date.valueOf() &&
          el.date.valueOf() <= action.payload.prevEnd.valueOf()
      )

      actionData.forEach((el: ITrendResult) => {
        state.value.roas = getPlus(state.value.roas, el.roas)
        state.value.cost = getPlus(state.value.cost, el.cost)
        state.value.imp = getPlus(state.value.imp, el.imp)
        state.value.click = getPlus(state.value.click, el.click)
        state.value.conv = getPlus(state.value.conv, el.conv)
        state.value.convValue = getPlus(state.value.convValue, el.convValue)
      })
      prevData.forEach((el: ITrendResult) => {
        state.value.tRoas = getPlus(state.value.tRoas, el.roas)
        state.value.tCost = getPlus(state.value.tCost, el.cost)
        state.value.tImp = getPlus(state.value.tImp, el.imp)
        state.value.tClick = getPlus(state.value.tClick, el.click)
        state.value.tConv = getPlus(state.value.tConv, el.conv)
        state.value.tConvValue = getPlus(state.value.tConvValue, el.convValue)
      })
      state.value.tRoas = getMinus(state.value.roas, state.value.tRoas)
      state.value.tCost = getMinus(state.value.cost, state.value.tCost)
      state.value.tImp = getMinus(state.value.imp, state.value.tImp)
      state.value.tClick = getMinus(state.value.click, state.value.tClick)
      state.value.tConv = getMinus(state.value.conv, state.value.tConv)
      state.value.tConvValue = getMinus(state.value.convValue, state.value.tConvValue)
    },

    resetTrendData: () => INITIAL_STATE,
  },
})

export const { trendDataSum, resetTrendData } = trendSlice.actions

export default trendSlice.reducer

export const trendData = (state: RootState) => state.dailyTrendData.value

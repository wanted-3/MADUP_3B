import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '.'
import { Idaily } from './dailyTrendData'

export interface IDate {
  x: string
  y: number
}
// interface Icost {
//   date: string
//   cost: number
// }
// interface Iimp {
//   date: string
//   imp: number
// }
// interface Iclick {
//   date: string
//   click: number
// }
// interface Iconv {
//   date: string
//   conv: number
// }
// interface IconvValue {
//   date: string
//   convValue: number
// }

interface WeeklyState {
  value: {
    ROAS: IDate[]
    COST: IDate[]
    IMP: IDate[]
    CLICK: IDate[]
    CONV: IDate[]
    CONVVALUE: IDate[]
  }
}
const INITIAL_STATE: WeeklyState = {
  value: {
    ROAS: [],
    COST: [],
    IMP: [],
    CLICK: [],
    CONV: [],
    CONVVALUE: [],
  },
}

const weeklySlice = createSlice({
  name: 'weeklyTrendData',
  initialState: INITIAL_STATE,
  reducers: {
    temp: (state, action) => {
      state.value = INITIAL_STATE.value
      const actionData = action.payload.data.report.daily.filter(
        (el: Idaily) =>
          action.payload.startDate.valueOf() <= el.date.valueOf() &&
          el.date.valueOf() <= action.payload.endDate.valueOf()
      )

      actionData.forEach((el: Idaily) => {
        state.value = {
          ROAS: [...state.value.ROAS, { x: el.date, y: el.roas }],
          COST: [...state.value.COST, { x: el.date, y: el.cost }],
          IMP: [...state.value.IMP, { x: el.date, y: el.imp }],
          CLICK: [...state.value.CLICK, { x: el.date, y: el.click }],
          CONV: [...state.value.CONV, { x: el.date, y: el.conv }],
          CONVVALUE: [...state.value.CONVVALUE, { x: el.date, y: el.convValue }],
        }
      })
      console.log(state.value)
    },
  },
})

export const { temp } = weeklySlice.actions

export default weeklySlice.reducer

export const weeklyData = (state: RootState) => state.weeklyTrendData.value

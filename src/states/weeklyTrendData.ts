import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '.'
import { Idaily } from './dailyTrendData'

export interface IData {
  value: {
    x: string
    y: number
  }[]
  color: string
}
interface WeeklyState {
  value: {
    ROAS: IData
    COST: IData
    IMP: IData
    CLICK: IData
    CONV: IData
    CONVVALUE: IData
  }
}

const INITIAL_STATE: WeeklyState = {
  value: {
    ROAS: { value: [], color: '#4FADF7' },
    COST: { value: [], color: '#AC8AF8' },
    IMP: { value: [], color: '#D3A518' },
    CLICK: { value: [], color: '#F88F6F' },
    CONV: { value: [], color: '#85DA47' },
    CONVVALUE: { value: [], color: '#434656' },
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
          ROAS: { value: [...state.value.ROAS.value, { x: el.date, y: el.roas }], color: '#4FADF7' },
          COST: { value: [...state.value.COST.value, { x: el.date, y: el.cost }], color: '#AC8AF8' },
          IMP: { value: [...state.value.IMP.value, { x: el.date, y: el.imp }], color: '#D3A518' },
          CLICK: { value: [...state.value.CLICK.value, { x: el.date, y: el.click }], color: '#F88F6F' },
          CONV: { value: [...state.value.CONV.value, { x: el.date, y: el.conv }], color: '#85DA47' },
          CONVVALUE: { value: [...state.value.CONVVALUE.value, { x: el.date, y: el.convValue }], color: '#434656' },
        }
      })
    },
  },
})

export const { temp } = weeklySlice.actions

export default weeklySlice.reducer

export const weeklyData = (state: RootState) => state.weeklyTrendData.value

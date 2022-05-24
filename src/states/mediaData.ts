import { createSlice } from '@reduxjs/toolkit'
import { ImediaData } from 'services/temp'

import type { RootState } from '.'

const INITIAL_STATE = {
  value: {
    facebook: { cost: 0, convValue: 0, roas: 0, imp: 0, click: 0, ctr: 0, cpc: 0 },
    naver: { cost: 0, convValue: 0, roas: 0, imp: 0, click: 0, ctr: 0, cpc: 0 },
    google: { cost: 0, convValue: 0, roas: 0, imp: 0, click: 0, ctr: 0, cpc: 0 },
    kakao: { cost: 0, convValue: 0, roas: 0, imp: 0, click: 0, ctr: 0, cpc: 0 },
    all: { cost: 0, convValue: 0, roas: 0, imp: 0, click: 0, ctr: 0, cpc: 0 },
  },
}

export interface UseNumValue {
  cost: number
  convValue: number
  roas: number
  imp: number
  click: number
  ctr: number
  cpc: number
}

export interface SystemState {
  value: {
    [key: string]: UseNumValue
  }
}

const systemSlice = createSlice({
  name: 'mediaData',
  initialState: INITIAL_STATE as SystemState,
  reducers: {
    test: (state, action) => {
      state.value = INITIAL_STATE.value

      const actionData = action.payload.data.filter(
        (item: ImediaData) => action.payload.startDate <= item.date && item.date <= action.payload.endDate
      )

      actionData.map((item: ImediaData) => {
        state.value[item.channel] = {
          cost: state.value[item.channel].cost + item.cost,
          convValue: state.value[item.channel].convValue + item.convValue,
          roas: state.value[item.channel].roas + item.roas,
          imp: state.value[item.channel].imp + item.imp,
          click: state.value[item.channel].click + item.click,
          ctr: state.value[item.channel].ctr + item.ctr,
          cpc: state.value[item.channel].cpc + item.cpc,
        }

        state.value.all = {
          cost: state.value.all.cost + item.cost,
          convValue: state.value.all.convValue + item.convValue,
          roas: state.value.all.roas + item.roas,
          imp: state.value.all.imp + item.imp,
          click: state.value.all.click + item.click,
          ctr: state.value.all.ctr + item.ctr,
          cpc: state.value.all.cpc + item.cpc,
        }
      })
    },
  },
})

export const { test } = systemSlice.actions

export default systemSlice.reducer

export const selectadMediaData = (state: RootState) => state.mediaData.value

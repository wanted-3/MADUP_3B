import { createSlice } from '@reduxjs/toolkit'
import BigNumber from 'bignumber.js'

import { ImediaData } from 'services/getData'

import type { RootState } from '.'

export interface IUseNumValue {
  cost: number
  convValue: number
  roas: number
  imp: number
  click: number
  ctr: number
  cpc: number
  cvr: number
}

export interface SystemState {
  value: {
    [key: string]: IUseNumValue
  }
}

const INITIAL_STATE = {
  value: {
    facebook: { cost: 0, convValue: 0, roas: 0, imp: 0, click: 0, ctr: 0, cpc: 0, cvr: 0 },
    naver: { cost: 0, convValue: 0, roas: 0, imp: 0, click: 0, ctr: 0, cpc: 0, cvr: 0 },
    google: { cost: 0, convValue: 0, roas: 0, imp: 0, click: 0, ctr: 0, cpc: 0, cvr: 0 },
    kakao: { cost: 0, convValue: 0, roas: 0, imp: 0, click: 0, ctr: 0, cpc: 0, cvr: 0 },
    all: { cost: 0, convValue: 0, roas: 0, imp: 0, click: 0, ctr: 0, cpc: 0, cvr: 0 },
  },
}

const systemSlice = createSlice({
  name: 'mediaData',
  initialState: INITIAL_STATE as SystemState,
  reducers: {
    getMediaData: (state, action) => {
      state.value.all = INITIAL_STATE.value.all
      state.value.facebook = INITIAL_STATE.value.facebook
      state.value.google = INITIAL_STATE.value.google
      state.value.kakao = INITIAL_STATE.value.kakao
      state.value.naver = INITIAL_STATE.value.naver

      const actionData = action.payload.data.filter(
        (item: ImediaData) => action.payload.startDate <= item.date && item.date <= action.payload.endDate
      )

      actionData.forEach((item: ImediaData) => {
        state.value[item.channel] = {
          cost: new BigNumber(state.value[item.channel].cost).plus(item.cost).toNumber(),
          convValue: new BigNumber(state.value[item.channel].convValue).plus(item.convValue).toNumber(),
          roas: new BigNumber(state.value[item.channel].roas).plus(item.roas).toNumber(),
          imp: new BigNumber(state.value[item.channel].imp).plus(item.imp).toNumber(),
          click: new BigNumber(state.value[item.channel].click).plus(item.click).toNumber(),
          ctr: new BigNumber(state.value[item.channel].ctr).plus(item.ctr).toNumber(),
          cpc: new BigNumber(state.value[item.channel].cpc).plus(item.cpc).toNumber(),
          cvr: new BigNumber(state.value[item.channel].cvr).plus(item.cvr).toNumber(),
        }

        state.value.all = {
          cost: new BigNumber(state.value.all.cost).plus(item.cost).toNumber(),
          convValue: new BigNumber(state.value.all.convValue).plus(item.convValue).toNumber(),
          roas: new BigNumber(state.value.all.roas).plus(item.roas).toNumber(),
          imp: new BigNumber(state.value.all.imp).plus(item.imp).toNumber(),
          click: new BigNumber(state.value.all.click).plus(item.click).toNumber(),
          ctr: new BigNumber(state.value.all.ctr).plus(item.ctr).toNumber(),
          cpc: new BigNumber(state.value.all.cpc).plus(item.cpc).toNumber(),
          cvr: new BigNumber(state.value.all.cvr).plus(item.cvr).toNumber(),
        }
      })
    },
  },
})

export const { getMediaData } = systemSlice.actions

export default systemSlice.reducer

export const selectadMediaData = (state: RootState) => state.mediaData.value

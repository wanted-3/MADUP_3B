import { createSlice, current } from '@reduxjs/toolkit'

import type { RootState } from '.'

export interface Iads {
  id: number
  adType: string
  title: string
  budget: number
  status: string
  startDate: string
  endDate: string | null
  report: {
    cost: number
    convValue: number
    roas: number
  }
}

export interface SystemState {
  value: {
    count: number
    AllAds: Iads[]
    filteredAds: Iads[]
  }
}

const INITIAL_STATE: SystemState = {
  value: {
    count: 0,
    AllAds: [],
    filteredAds: [],
  },
}

const systemSlice = createSlice({
  name: 'adListData',
  initialState: INITIAL_STATE,
  reducers: {
    firstTemp: (state, action) => {
      state.value.count = action.payload.count
      state.value.AllAds = action.payload.ads
      state.value.filteredAds = action.payload.ads
    },

    adListDataState: (state, action) => {
      state.value.filteredAds = state.value.AllAds.filter((item) => item.status === action.payload)
    },

    returnState: (state) => {
      state.value.filteredAds = state.value.AllAds
    },
  },
})

export const { firstTemp, adListDataState, returnState } = systemSlice.actions

export default systemSlice.reducer

export const selectadListData = (state: RootState) => state.adListData.value.filteredAds

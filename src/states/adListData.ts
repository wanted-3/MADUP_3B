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
    state: 'all' | 'ended' | 'active'
    AllAds: Iads[]
    filteredAds: Iads[]
  }
}

const INITIAL_STATE: SystemState = {
  value: {
    count: 0,
    state: 'all',
    AllAds: [],
    filteredAds: [],
  },
}

const systemSlice = createSlice({
  name: 'adListData',
  initialState: INITIAL_STATE,
  reducers: {
    mountAdListData: (state, action) => {
      state.value.count = action.payload.count
      state.value.AllAds = action.payload.ads

      if (state.value.state === 'all') {
        state.value.filteredAds = state.value.AllAds
      } else {
        state.value.filteredAds = state.value.AllAds.filter((item) => item.status === state.value.state)
      }
    },

    ChangeAdListData: (state, action) => {
      state.value.state = action.payload

      if (state.value.state === 'all') {
        state.value.filteredAds = state.value.AllAds
      } else {
        state.value.filteredAds = state.value.AllAds.filter((item) => item.status === state.value.state)
      }

      state.value.count = state.value.filteredAds.length
    },
  },
})

export const { mountAdListData, ChangeAdListData } = systemSlice.actions

export default systemSlice.reducer

export const selectadListData = (state: RootState) => state.adListData.value.filteredAds
export const selectedState = (state: RootState) => state.adListData.value.state

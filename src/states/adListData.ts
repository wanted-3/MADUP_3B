import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '.'

const dummy = {
  count: 4,
  ads: [
    {
      id: 1,
      adType: 'web',
      title: '매드업 레버 광고 1234',
      budget: 500000,
      status: 'active',
      startDate: '2020-10-19T00:00:00',
      endDate: null,
      report: {
        cost: 267144117,
        convValue: 1157942685,
        roas: 433,
      },
    },
    {
      id: 2,
      adType: 'web',
      title: '매드업 레버 광고 12345',
      budget: 200000,
      status: 'ended',
      startDate: '2021-01-22T00:00:00',
      endDate: '2021-12-21T23:59:59',
      report: {
        cost: 169837362,
        convValue: 745438798,
        roas: 438,
      },
    },
    {
      id: 3,
      adType: 'web',
      title: '원티드 레버 광고 1234',
      budget: 150000,
      status: 'active',
      startDate: '2022-01-01T00:00:00',
      endDate: null,
      report: {
        cost: 699481243,
        convValue: 898716259,
        roas: 1284,
      },
    },
    {
      id: 4,
      adType: 'app',
      title: '매드업 앱광고 광고 9912',
      budget: 240000,
      status: 'active',
      startDate: '2022-02-10T00:00:00',
      endDate: null,
      report: {
        cost: 9300222,
        convValue: 38234789,
        roas: 411,
      },
    },
  ],
}

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
    ads: Iads[]
  }
}

const INITIAL_STATE: SystemState = {
  value: dummy,
}

const systemSlice = createSlice({
  name: 'adListData',
  initialState: INITIAL_STATE,
  reducers: {
    adListDataState: (state, action) => {
      state.value.ads = INITIAL_STATE.value.ads.filter((item) => item.status === action.payload)
    },

    resetAdListData: () => INITIAL_STATE,
  },
})

export const { adListDataState, resetAdListData } = systemSlice.actions

export default systemSlice.reducer

export const selectadListData = (state: RootState) => state.adListData.value

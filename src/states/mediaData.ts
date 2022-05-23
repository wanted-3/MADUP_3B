import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '.'

/*
[
  {channel: 'google'},
]



*/

const a = [{ channel: 'goole' }]

const dummy = [
  {
    channel: 'google',
    data: [
      // {
      //   click: 7,
      //   cost: 2098,
      //   cpa: 0,
      //   cpc: 299.7143,
      //   ctr: 14,
      //   cvr: 0,
      //   date: '2022-02-01',
      //   imp: 50,
      //   roas: 0,
      // },
    ],
  },
  {
    channel: 'kakao',
    data: [],
  },
  {
    channel: 'naver',
    data: [],
  },
  {
    channel: 'facebook',
    data: [],
  },
]

const INITIAL_STATE = {
  value: [],
}

export interface SystemState {
  value: any
}

const systemSlice = createSlice({
  name: 'mediaData',
  initialState: INITIAL_STATE as SystemState,
  reducers: {
    temp: (state, action) => {
      action.payload.map((item: any) => {
        // console.log(111)
      })
    },

    test: (state) => {
      console.log(123123)
      state.value = []
    },
  },
})

export const { temp, test } = systemSlice.actions

export default systemSlice.reducer

export const selectadMediaData = (state: RootState) => state.mediaData.value

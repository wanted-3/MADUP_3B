import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '.'

export interface Options {
  value: {
    firstOption: string
    secondOption: string
  }
}

const INITIAL_STATE: Options = {
  value: {
    firstOption: 'ROAS',
    secondOption: '광고비',
  },
}

const systemSlice = createSlice({
  name: 'selectedOptions',
  initialState: INITIAL_STATE,
  reducers: {
    setFirstOption: (state, action) => {
      if (state.value.secondOption !== action.payload) {
        state.value.firstOption = action.payload
      }
    },
    setSecondOption: (state, action) => {
      if (state.value.firstOption !== action.payload) {
        state.value.secondOption = action.payload
      }
    },
  },
})

export const { setFirstOption, setSecondOption } = systemSlice.actions

export default systemSlice.reducer

export const selectedOption = (state: RootState) => state.selectedOptions.value

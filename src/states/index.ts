import { configureStore } from '@reduxjs/toolkit'

import weeklyTrendData from './weeklyTrendData'
import selectedOptions from './selectedOptions'
import storedDate from './storedDate'
import adListData from './adListData'
import trendData from './trendData'
import mediaData from './mediaData'

export const store = configureStore({
  reducer: { adListData, trendData, mediaData, weeklyTrendData, storedDate, selectedOptions },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

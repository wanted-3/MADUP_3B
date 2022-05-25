import { configureStore } from '@reduxjs/toolkit'
import adListData from './adListData'
import dailyTrendData from './dailyTrendData'
import mediaData from './mediaData'
import weeklyTrendData from './weeklyTrendData'
import storedDate from './storedDate'
import selectedOptions from './selectedOptions'

export const store = configureStore({
  reducer: { adListData, dailyTrendData, mediaData, weeklyTrendData, storedDate, selectedOptions },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

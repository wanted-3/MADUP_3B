import { configureStore } from '@reduxjs/toolkit'
import adListData from './adListData'
import dailyTrendData from './dailyTrendData'
import mediaData from './mediaData'

export const store = configureStore({
  reducer: { adListData, dailyTrendData, mediaData },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

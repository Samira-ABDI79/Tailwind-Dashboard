import { configureStore } from '@reduxjs/toolkit'
import PostsReducer from './Redux/PostsSlice'

export const store = configureStore({
  reducer: {
posts : PostsReducer
  },
})
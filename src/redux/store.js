import { configureStore } from '@reduxjs/toolkit'
import PostsReducer  from './posts/postsSlice.js'

export const store = configureStore({
  reducer: {
        posts: PostsReducer,
  },
})
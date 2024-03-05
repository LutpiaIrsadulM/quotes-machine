import { configureStore } from '@reduxjs/toolkit'
import randomReducer from '../features/randomize/randomSlice.js'

export default configureStore({
  reducer: {
    random: randomReducer,
  },
})
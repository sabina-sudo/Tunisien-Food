import { configureStore } from '@reduxjs/toolkit'
import foodReducer from './features/foodSlice'
const store = configureStore({
  reducer: {
    foods:foodReducer
  },
})

export default store
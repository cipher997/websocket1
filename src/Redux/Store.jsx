import { configureStore } from '@reduxjs/toolkit'
import responseData from '../components/ResponseSlice'

const store = configureStore({
    reducer: {
        responseData:responseData
    }
})

export default store
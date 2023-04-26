import {createSlice} from "@reduxjs/toolkit" 

const responseSlice =  createSlice({
    name: "data",
    initialState: {
        responseData: []
    },
    reducers: {
        responseStore(state, action){
           console.log(action.payload)
        state.responseData.push(action.payload)
        }
    } 
})
export const {responseStore} = responseSlice.actions
export default responseSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            const {payload} = action;
            state.value += +payload;
        },
        decrement: (state, action) => {
            const {payload} = action
            state.value -= +payload;
        },
        reset: state => {
            state.value =0;
        }
    }
})

export const {increment, decrement, reset} = counterSlice.actions;

export default counterSlice.reducer;

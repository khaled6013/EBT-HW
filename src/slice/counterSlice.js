import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: "keyboard",
  value: "hello world",
}

export const counterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
   allProducts:(state)=>{
    //  state.value = 0
   }
  },
})

export const { allProducts } = counterSlice.actions

export default counterSlice.reducer
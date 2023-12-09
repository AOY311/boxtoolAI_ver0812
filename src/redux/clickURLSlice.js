import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const clickURLSlice = createSlice({
  name: 'clickUrl',
  initialState,
  reducers: {
    onClickInputUrl: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true
    },
    dontClickInputUrl: (state) =>{
      state.value= false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { onClickInputUrl,dontClickInputUrl } = clickURLSlice.actions

export default clickURLSlice.reducer
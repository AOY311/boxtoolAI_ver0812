import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const clickAudioSlice = createSlice({
  name: 'clickAudio',
  initialState,
  reducers: {
    onClickAudio: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true
    },
    dontClickAudio: (state) =>{
      state.value= false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { onClickAudio,dontClickAudio } = clickAudioSlice.actions

export default clickAudioSlice.reducer
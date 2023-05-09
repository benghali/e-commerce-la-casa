import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    img: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username
      state.img = action.payload.img
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer

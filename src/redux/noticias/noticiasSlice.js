import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  noticias: [],
  total: 0,
  isLoading: false
}

export const noticiasSlice = createSlice({
  name: 'noticias',
  initialState,
  reducers: {
    startLoadingNoticia: (state) => {
      state.isLoading = true
    },
    setNoticia: (state, action) => {
      state.noticias = action.payload.noticias
      state.total = action.payload.total
      state.isLoading = false
    },
  }
})

export const { startLoadingNoticia, setNoticia } = noticiasSlice.actions
export default noticiasSlice.reducer
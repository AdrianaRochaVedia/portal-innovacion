import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  centros: {},
  isLoading: false
}

export const centroSlice = createSlice({
  name: 'centros',
  initialState,
  reducers: {
    startLoadingCentro: (state) => {
      state.isLoading = true
    },
    setCentro: (state, action) => {
      state.empresas = action.payload
      state.isLoading = false
    },
  }
})

export const { startLoadingCentro, setCentro } = centroSlice.actions
export default centroSlice.reducer

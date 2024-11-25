import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  empresas: [],
  isLoading: false
}

export const empresasSlice = createSlice({
  name: 'empresas',
  initialState,
  reducers: {
    startLoadingEmpresa: (state) => {
      state.isLoading = true
    },
    setEmpresas: (state, action) => {
      state.empresas = action.payload.empresas
      state.isLoading = false
    },
  }
})

export const { startLoadingEmpresa, setEmpresas } = empresasSlice.actions
export default empresasSlice.reducer
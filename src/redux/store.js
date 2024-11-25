import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './user/userSlice'
import docenteReducer from './docentes/docenteSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    docentes: docenteReducer
  }
})
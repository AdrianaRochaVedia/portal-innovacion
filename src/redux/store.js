import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './user/userSlice'
import docenteReducer from './docentes/docenteSlice'
import graduadosReducer from './alumni/alumniSlice'
import empresasReducer from './empresas/empresasSlice'
import noticiasReducer from './noticias/noticiasSlice'
import centroReducer from './centro/centroSlice'
import sociedadReducer from './sociedad/sociedadSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    docentes: docenteReducer,
    graduados: graduadosReducer,
    empresas: empresasReducer,
    noticias: noticiasReducer,
    centro: centroReducer,
    sociedad: sociedadReducer
  }
})


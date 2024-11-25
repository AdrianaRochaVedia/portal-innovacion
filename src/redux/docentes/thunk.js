import Swal from 'sweetalert2'
import { mainApi } from '../../axios'
import { setDocentes, startLoadingDocente } from './docenteSlice'

export const getDocentes = (token) => {
  return async(dispatch) => {
    dispatch(startLoadingDocente())
    await mainApi.get('/api/docente')
      .then(resp => {
        dispatch(setDocentes(resp.data))
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: "Docentes no encontrados"
        })
      })
  }
}
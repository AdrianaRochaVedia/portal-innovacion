import Swal from 'sweetalert2'
import { mainApi } from '../../axios'
import { setGraduados, startLoadingGraduado } from './alumniSlice'

export const getGraduados = () => {
  return async(dispatch) => {
    dispatch(startLoadingGraduado())
    await mainApi.get('/api/graduado')
      .then(resp => {
        console.log(resp.data)
        dispatch(setGraduados(resp.data))
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: "Graduados no encontrados"
        })
      })
  }
}
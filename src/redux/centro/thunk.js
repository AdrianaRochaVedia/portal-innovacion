import Swal from 'sweetalert2'
import { mainApi } from '../../axios'
import { setCentro, startLoadingCentro } from './centroSlice'

export const getCentro = () => {
  return async(dispatch) => {
    dispatch(startLoadingCentro)
    await mainApi.get('/api/centro')
      .then(resp => {
        console.log(resp.data)
        dispatch(setCentro(resp.data.centros[0]))
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: "Centro no encontrado"
        })
      })
  }
}
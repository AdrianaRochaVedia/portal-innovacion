import Swal from 'sweetalert2'
import { mainApi } from '../../axios'
import { setCentro, startLoadingCentro } from './centroSlice'

export const getCentro = () => {
  return async(dispatch) => {
    dispatch(startLoadingCentro)
    await mainApi.get('/api/centro')
      .then(resp => {
        console.log(resp.data.centros[0])
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

export const createCentro = async(centro, modal) => {
  console.log("Arrives")
    await mainApi.post('/api/centro',centro, {
      headers: {
        'Content-type': 'application/json',
        'x-token': localStorage.getItem("token-ptin")
      }
    })
    .then(resp => {
      Swal.fire('Éxito', 'Centro registrado exitosamente.', 'success');
    })
    .catch(err => {
      Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: "Error al crear el centro"
      })
    })
}
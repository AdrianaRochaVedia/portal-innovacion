import Swal from 'sweetalert2'
import { mainApi } from '../../axios'
import { setUcentro, startLoadingUcentro } from './ucentroSlice'

export const getUcentro = () => {
  return async(dispatch) => {
    dispatch(startLoadingUcentro())
    await mainApi.get('/api/ucentro')
      .then(resp => {
        console.log("Ucentro: " + resp.data.ucentro)
        dispatch(setUcentro(resp.data.ucentro))
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: "Miembros del centro no encontrados"
        })
      })
  }
}

export const createUcentro = async(ucentro, modal) => {
  console.log("Arrives")
    await mainApi.post('/api/ucentro',ucentro, {
      headers: {
        'Content-type': 'application/json',
        'x-token': localStorage.getItem("token-ptin")
      }
    })
    .then(resp => {
      Swal.fire('Éxito', 'Miembro del centro registrado exitosamente.', 'success');
    })
    .catch(err => {
      Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: "Error al registrar al miembro del centro"
      })
    })
}
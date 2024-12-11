import Swal from 'sweetalert2'
import { mainApi } from '../../axios'
import { setSociedad, startLoadingSociedad } from './sociedadSlice'

export const getSociedad = () => {
  return async(dispatch) => {
    console.log("Sociedad")
    dispatch(startLoadingSociedad())
    await mainApi.get('/api/sociedad')
      .then(resp => {
        console.log(resp.data)
        dispatch(setSociedad(resp.data.sociedades[0]))
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: "Sociedades no encontradas"
        })
      })
  }
}

export const createSociedad = async(sociedad, modal) => {
  console.log("Arrives")
    await mainApi.post('/api/sociedad',sociedad, {
      headers: {
        'Content-type': 'application/json',
        'x-token': localStorage.getItem("token-ptin")
      }
    })
    .then(resp => {
      Swal.fire('Éxito', 'Sociedad registrada exitosamente.', 'success');
    })
    .catch(err => {
      Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: "Error al registrar la sociedad"
      })
    })
}
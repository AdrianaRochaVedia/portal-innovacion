import Swal from 'sweetalert2'
import { mainApi } from '../../axios'
import { setUsociedad, startLoadingUsociedad } from './usociedadSlice'

export const getUsociedad = () => {
  return async(dispatch) => {
    dispatch(startLoadingUsociedad())
    await mainApi.get('/api/usociedad')
      .then(resp => {
        console.log("Usociedad: " + resp.data.usociedad)
        dispatch(setUsociedad(resp.data.usociedad))
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: "Miembros de la sociedad no encontrados"
        })
      })
  }
}

export const createUsociedad = async(usociedad, modal) => {
  console.log("Arrives")
    await mainApi.post('/api/usociedad',usociedad, {
      headers: {
        'Content-type': 'application/json',
        'x-token': localStorage.getItem("token-ptin")
      }
    })
    .then(resp => {
      Swal.fire('Éxito', 'Miembro de la sociedad registrado exitosamente.', 'success');
    })
    .catch(err => {
      Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: "Error al registrar al miembro de la sociedad"
      })
    })
}
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

export const createGraduado = async(graduado, modal) => {
  console.log("Arrives")
    await mainApi.post('/api/graduado',graduado, {
      headers: {
        'Content-type': 'application/json',
        'x-token': localStorage.getItem("token-ptin")
      }
    })
    .then(resp => {
      Swal.fire('Éxito', 'Graduado registrado exitosamente.', 'success');
    })
    .catch(err => {
      Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: "Error al registrar al graduado"
      })
    })
}
import Swal from 'sweetalert2'
import { mainApi } from '../../axios'
import { setDocentes, startLoadingDocente } from './docenteSlice'

export const getDocentes = () => {
  return async(dispatch) => {
    dispatch(startLoadingDocente())
    await mainApi.get('/api/docente')
      .then(resp => {
        console.log(resp.data)
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

export const createDocente = async(docente, modal) => {
  console.log("Arrives")
    await mainApi.post('/api/docentes',docente, {
      headers: {
        'Content-type': 'application/json',
        'x-token': localStorage.getItem("token-ptin")
      }
    })
    .then(resp => {
      Swal.fire('Éxito', 'Docente registrado exitosamente.', 'success');
    })
    .catch(err => {
      Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: "Error al registrar al docente"
      })
    })
}
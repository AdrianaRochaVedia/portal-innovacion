import Swal from 'sweetalert2'
import { mainApi } from '../../axios'
import { setEmpresas, startLoadingEmpresa } from './empresasSlice'

export const getEmpresas = () => {
  return async(dispatch) => {
    dispatch(startLoadingEmpresa)
    await mainApi.get('/api/empresas')
      .then(resp => {
        console.log(resp.data)
        dispatch(setEmpresas(resp.data))
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: "Empresas no encontradas"
        })
      })
  }
}

export const createEmpresa = async(empresa, modal) => {
  console.log("Arrives")
    await mainApi.post('/api/empresas',empresa, {
      headers: {
        'Content-type': 'application/json',
        'x-token': localStorage.getItem("token-ptin")
      }
    })
    .then(resp => {
      Swal.fire('Éxito', 'Empresa aliada registrada exitosamente.', 'success');
    })
    .catch(err => {
      Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: "Error al crear empresa"
      })
    })
}
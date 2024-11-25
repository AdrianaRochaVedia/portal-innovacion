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
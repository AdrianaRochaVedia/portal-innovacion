import Swal from 'sweetalert2'
import { mainApi } from '../../axios'
import { setNoticia, startLoadingNoticia } from './noticiasSlice'

export const getNews = () => {
  return async(dispatch) => {
    dispatch(startLoadingNoticia)
    await mainApi.get('/api/news')
      .then(resp => {
        console.log(resp.data)
        dispatch(setNoticia(resp.data))
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: "Noticias no encontradas"
        })
      })
  }
}
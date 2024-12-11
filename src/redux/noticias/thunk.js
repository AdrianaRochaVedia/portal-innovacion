import Swal from 'sweetalert2'
import { mainApi } from '../../axios'
import { setNoticia, startLoadingNoticia } from './noticiasSlice'

export const getNews = (limit, page) => {
  return async(dispatch) => {
    dispatch(startLoadingNoticia)
    await mainApi.get('/api/news',
      {
        headers: {
          'limit': limit,
          'page': page
        }
      }
    )
      .then(resp => {
        console.log("Fetch Noticias: " + resp.data)
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
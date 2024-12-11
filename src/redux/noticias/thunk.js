import Swal from 'sweetalert2'
import { mainApi } from '../../axios'
import { setNoticia, setNoticiaId, startLoadingNoticia } from './noticiasSlice'

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
        localStorage.setItem("news-array", resp.data)
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

export const getNewById = (id) => {
  return async(dispatch) => {
    dispatch(startLoadingNoticia)
    await mainApi.get(`/api/news/${id}`)
      .then(resp => {
        console.log("Fetch Noticia: " + resp.data.noticia.title)
        dispatch(setNoticiaId(resp.data))
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: "Noticia no encontradas"
        })
      })
  }
}
import { mainApi } from '../axios'

// export const loginUser = async (email, password) => {
//   return await mainApi.post('/api/auth', {
//     email,
//     password
//   })
// }


export const loginUser = async (email, password) => {
  try {
    // Realizamos la solicitud al backend
    const response = await mainApi.post('/api/auth', { email, password });

    if (response.data.ok) {
      // Si la respuesta es exitosa, guardamos el token en el localStorage
      const token = response.data.token;  // Suponiendo que el token está en response.data.token
      localStorage.setItem('token', token);  // Almacenamos el token en el localStorage

      console.log('Usuario logueado correctamente');
      return response;  // Retornamos la respuesta para usarla donde sea necesario
    } else {
      console.error('Login fallido:', response.data.msg);
      return null;  // En caso de error, retornamos null o gestionamos de otra forma
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;  // Propagamos el error para manejarlo en el componente
  }
};

export const crearUser = async (name,email, password,rol,isDeleted) => {
  return await mainApi.post('/api/auth/new', {
    name,
    email,
    password,
    rol,
    isDeleted
  })
}

export const revalidarToken = async (ui,name) => {
  return await mainApi.post('/api/auth/new', {
    ui,
    name
  })
}
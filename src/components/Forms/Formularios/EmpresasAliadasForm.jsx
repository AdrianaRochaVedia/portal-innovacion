import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { createEmpresa } from '../../../redux/empresas/thunk';
import { useNavigate } from 'react-router';

const EmpresasAliadasForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombres: '',
    email: '',
    descripcion: '',
    link: '',
    estado: false,
    imagen: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggleChange = () => {
    setFormData({ ...formData, estado: !formData.estado });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({ ...formData, imagen: file });
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateLink = async (url) => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (event) => {
    console.log("Envio de formulario")
    event.preventDefault();

    const { nombres, email, descripcion, link, estado } = formData;

    if (!nombres || !email || !descripcion || !link) {
      Swal.fire('Error', 'Todos los campos son obligatorios.', 'error');
      return;
    }

    if (!validateEmail(email)) {
      Swal.fire('Error', 'El email no es válido.', 'error');
      return;
    }

    const linkIsValid = await validateLink(link);
    if (linkIsValid) {
      Swal.fire('Error', 'El enlace proporcionado no es válido.', 'error');
      return;
    }

    const empresa = {
      name: nombres,
      email,
      description: descripcion,
      link,
      state: estado
    }
    
    createEmpresa(empresa)
    navigate("/oportunidades")
    // dispatch(createEmpresa(empresa))
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Nombres
        <input
          type="text"
          name="nombres"
          value={formData.nombres}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Descripción
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Link
        <input
          type="url"
          name="link"
          value={formData.link}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Estado
        <div className="toggle-switch">
          <input
            type="checkbox"
            id="estado-toggle"
            checked={formData.estado}
            onChange={handleToggleChange}
          />
          <label htmlFor="estado-toggle" className="toggle-label">
            {formData.estado ? 'Activo' : 'Inactivo'}
          </label>
        </div>
      </label>
      <label>
      <label className="image-upload">
        <span className="custom-button">Subir Imágen</span>
        <input
          type="file"
          name="image"
          multiple
          accept="image/*"
          onChange={handleImageChange}
        />
        <span className="text">Puedes subir hasta 1 imágen.</span>
      </label>
        {formData.imagen && (
          <div className="image-preview">
            <img
              src={URL.createObjectURL(formData.imagen)}
              alt="Preview"
              style={{ maxWidth: '100px', maxHeight: '100px' }}
            />
          </div>
        )}
      </label>
      <button type="submit">Registrar Empresa Aliada</button>
    </form>
  );
}; export default EmpresasAliadasForm;
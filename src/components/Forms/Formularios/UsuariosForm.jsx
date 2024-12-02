import React, { useState } from 'react';
import Swal from 'sweetalert2';

const UsuariosForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    rol: '',
    isDeleted: false,
    isCentro: false,
    isSociedad: false,
    isDocente: false,
    isGraduado: false,
    links: [''],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleLinkChange = (index, value) => {
    const updatedLinks = [...formData.links];
    updatedLinks[index] = value;
    setFormData({ ...formData, links: updatedLinks });
  };

  const addLinkField = () => {
    setFormData({ ...formData, links: [...formData.links, ''] });
  };

  const removeLinkField = (index) => {
    const updatedLinks = formData.links.filter((_, i) => i !== index);
    setFormData({ ...formData, links: updatedLinks });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateLinks = async (links) => {
    for (const link of links) {
      try {
        const response = await fetch(link, { method: 'HEAD' });
        if (!response.ok) return false;
      } catch {
        return false;
      }
    }
    return true;
  };

  const validateRoleLogic = () => {
    const { rol, isDocente, isCentro, isSociedad } = formData;

    if (rol === 'estudiante' && isDocente) {
      return 'Un estudiante no puede estar marcado como docente.';
    }

    if (rol === 'docente' && (isCentro || isSociedad)) {
      return 'Un docente no puede ser parte del centro o de la sociedad científica.';
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nombre, email, password, rol, links } = formData;

    if (!nombre || !email || !password || !rol || !links.length || !links[0]) {
      Swal.fire('Error', 'Todos los campos son obligatorios.', 'error');
      return;
    }

    if (!validateEmail(email)) {
      Swal.fire('Error', 'El email no es válido.', 'error');
      return;
    }

    const linksValid = await validateLinks(links);
    if (!linksValid) {
      Swal.fire('Error', 'Uno o más enlaces no son válidos.', 'error');
      return;
    }

    const roleError = validateRoleLogic();
    if (roleError) {
      Swal.fire('Error', roleError, 'error');
      return;
    }

    Swal.fire('Éxito', 'Usuario registrado correctamente.', 'success');
    // enviar los datos al servidor. devolver todo a los datos normales
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Nombre
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
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
        Contraseña
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Rol
        <select
          name="rol"
          value={formData.rol}
          onChange={handleInputChange}
          required
        >
          <option value="">Seleccionar</option>
          <option value="estudiante">Estudiante</option>
          <option value="docente">Docente</option>
          <option value="admin">Admin</option>
        </select>
      </label>

        <div className="checkbox-group">
            {[
                { name: "isDeleted", label: "Está Borrado" },
                { name: "isCentro", label: "Es Parte del Centro" },
                { name: "isSociedad", label: "Es Parte de la Sociedad Científica" },
                { name: "isDocente", label: "Es Docente" },
                { name: "isGraduado", label: "Está Graduado" },
            ].map(({ name, label }) => (
                <label key={name} className="checkbox-label">
                    <input
                        type="checkbox"
                        name={name}
                        checked={formData[name]}
                        onChange={handleInputChange}
                        className="checkbox-input"
                    />
                    <span className="checkbox-label-text">{label}</span>
                </label>
            ))}
        </div>

      <div className="links-section">
        <label>Links</label>
        {formData.links.map((link, index) => (
          <div key={index} className="link-input-group">
            <input
              type="url"
              value={link}
              onChange={(e) => handleLinkChange(index, e.target.value)}
              placeholder="Introduce un enlace"
              required
            />
            <button
              type="button"
              onClick={() => removeLinkField(index)}
              className="btn-remove-link"
            >
              Quitar
            </button>
          </div>
        ))}
        <button type="button" onClick={addLinkField} className="btn-add-link">
          Añadir Link
        </button>
      </div>

      <button type="submit">Registrar Usuario</button>
    </form>
  );
}; export default UsuariosForm;
import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Alumni from '../../components/AlumniCard';


const alumniData = [
  {
    description: "Este es un excelente programa educativo.",
    authorAvatar: "",
    authorName: "Juan Pérez",
    designation: "Ingeniero de Software",
    graduationYear: "Graduado 2022-I",
    excelencia: false,
  },
  {
    description: "Mi experiencia fue enriquecedora y desafiante.",
    authorAvatar: "",
    authorName: "María González",
    designation: "Diseñadora UX/UI",
    graduationYear: "Graduado 2021-II",
    excelencia: true,
  },
  {
    description: "El programa me ayudó a crecer profesionalmente.",
    authorAvatar: "",
    authorName: "Carlos López",
    designation: "Analista de Datos",
    graduationYear: "Graduado 2020-I",
    excelencia: true,
  },
  {
    description: "Aprendí habilidades valiosas para mi carrera.",
    authorAvatar: "",
    authorName: "Ana Ramírez",
    designation: "Ingeniera de Sistemas",
    graduationYear: "Graduado 2022-II",
    excelencia: false,
  },
  {
    description: "La calidad educativa es excelente.",
    authorAvatar: "",
    authorName: "Luis Martínez",
    designation: "Consultor de TI",
    graduationYear: "Graduado 2023-I",
    excelencia: true,
  },
  {
    description: "Un programa que te prepara para el futuro.",
    authorAvatar: "",
    authorName: "Laura García",
    designation: "Especialista en Marketing Digital",
    graduationYear: "Graduado 2021-I",
    excelencia: false,
  },
];

const AlumniMain = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterYear, setFilterYear] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleFilter = (event) => {
    setFilterYear(event.target.value);
  };

  const filteredAlumni = alumniData.filter((alumnus) => {
    const matchesName = alumnus.authorName.toLowerCase().includes(searchTerm);
    const matchesYear = filterYear ? alumnus.graduationYear === filterYear : true;
    return matchesName && matchesYear;
  });

  const uniqueYears = [...new Set(alumniData.map((alumnus) => alumnus.graduationYear))];

  return (
    <>
      <main>
        <Breadcrumb title="Alumni" />

        <h1 className="titular-alumni">Conoce a nuestros graduados</h1>

        <div className="filters container mb-4">
          <div className="row">
            <div className="Busqueda-Alumni col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar por nombre"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="selector-alumni col-md-6 mb-3">
              <select
                className="form-select"
                value={filterYear}
                onChange={handleFilter}
              >
                <option value="">Sin Filtros</option>
                {uniqueYears.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="it-testimonial-area ed-testimonial-style-2 pt-50 pb-50 fix p-relative">
          <div className="container">
            <div className="row justify-content-center">
              {filteredAlumni.map((alumnus, index) => (
                <div key={index} className="contenedor-datos col-xl-4 col-lg-6 mb-30">
                  <Alumni
                    description={alumnus.description}
                    authorAvatar={alumnus.authorAvatar}
                    authorName={alumnus.authorName}
                    designation={alumnus.designation}
                    graduationYear={alumnus.graduationYear}
                    excelencia={alumnus.excelencia}
                  />
                </div>
              ))}
              {filteredAlumni.length === 0 && (
                <p className="text-center">No se encontraron resultados.</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AlumniMain;

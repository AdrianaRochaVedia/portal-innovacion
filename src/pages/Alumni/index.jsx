import React from 'react';
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
  return (
    <>
      <main>
        <Breadcrumb title="Alumni" />

        <h1 style={{ textAlign: 'center' }}>Conoce a nuestros graduados</h1>

        <div className="it-testimonial-area ed-testimonial-style-2 pt-120 pb-120 fix p-relative">
          <div className="container">
            <div className="row justify-content-center">
              {alumniData.map((alumnus, index) => (
                <div key={index} className="col-xl-4 col-lg-6 mb-30">
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AlumniMain;

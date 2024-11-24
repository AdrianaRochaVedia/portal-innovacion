import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import SingleTeamThree from '../../components/Team/SingleTeamThree';
import KnowUs from '../../components/Sce/KnowUs';

import teamImg1 from '../../assets/img/centro/1.jpeg';
import teamImg2 from '../../assets/img/centro/IMG-20240615-WA0014.jpg';
import teamImg3 from '../../assets/img/centro/IMG_20240614_231529.jpg';
import teamImg5 from '../../assets/img/team/team-4-5.jpg';
import teamImg6 from '../../assets/img/team/team-4-6.jpg';
import teamImg7 from '../../assets/img/team/team-4-7.jpg';
import teamImg8 from '../../assets/img/team/team-4-8.jpg';

const CentroMain = () => {
  const teamMembers = [
    { image: teamImg1, name: "Fabian Sanchez", designation: "Presidente" },
    { image: teamImg2, name: "Prof. Marco Javier Villavicencio", designation: "Docente tiempo completo" },
    { image: teamImg3, name: "Willie Diaz", designation: "Docente" },
    { image: teamImg5, name: "Justin Clark", designation: "Docente" },
    { image: teamImg6, name: "Walter Skeete", designation: "Docente" },
    { image: teamImg7, name: "Willie Diaz", designation: "Docente" },
    { image: teamImg8, name: "Ann Dooley", designation: "Docente" },
  ];
  return (
    <main>
      <Breadcrumb title="CENTRO DE ESTUDIANTES" />

      <div className="ed-team-area p-relative inner-style fix z-index pt-110 pb-90">
        <div className="container">
          <KnowUs
            title="Conoce a nuestra Sociedad Centro de Estudiantes"
            subtitle="Nuestra Centro de Estudiantes"
            paragraph="Nuestra Sociedad Científica Estudiantil (SCE) es una organización estudiantil que tiene como objetivo fomentar la investigación científica y tecnológica en la comunidad universitaria. Conoce más sobre nuestra SCE a continuación."
            image={teamImg8}
          />
          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
                <SingleTeamThree
                  teamImage={member.image}
                  authorName={member.name}
                  designation={member.designation}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}; export default CentroMain;

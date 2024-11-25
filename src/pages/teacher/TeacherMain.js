import React, { useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import SectionTitle from '../../components/SectionTitle';
import SingleTeamThree from '../../components/Team/SingleTeamThree';

import teamImg1 from '../../assets/img/team/directora.png';
import teamImg2 from '../../assets/img/team/tiempo-completo.png';
import teamImg3 from '../../assets/img/team/team-4-3.jpg';
import teamImg4 from '../../assets/img/team/team-4-4.jpg';
import teamImg5 from '../../assets/img/team/team-4-5.jpg';
import teamImg6 from '../../assets/img/team/team-4-6.jpg';
import teamImg7 from '../../assets/img/team/team-4-7.jpg';
import teamImg8 from '../../assets/img/team/team-4-8.jpg';
import { useDispatch } from 'react-redux';
import { getDocentes } from '../../redux/docentes/thunk';
import { useSelector } from 'react-redux';

const TeacherMain = () => {
  const dispatch = useDispatch()
  const docenteState = useSelector((state) => state.docentes);
  const teachers = [
    { image: teamImg1, name: "Mgr. Jessica Lanza", designation: "Directora de Carrera" },
    { image: teamImg2, name: "Prof. Marco Javier Villavicencio", designation: "Docente tiempo completo" },
    { image: teamImg3, name: "Willie Diaz", designation: "Docente" },
    { image: teamImg4, name: "Jimmy Sifuentes", designation: "Docente" },
    { image: teamImg5, name: "Justin Clark", designation: "Docente" },
    { image: teamImg6, name: "Walter Skeete", designation: "Docente" },
    { image: teamImg7, name: "Willie Diaz", designation: "Docente" },
    { image: teamImg8, name: "Ann Dooley", designation: "Docente" },
  ];

  useEffect(() => {
    dispatch(getDocentes())
  }, [dispatch])

  return (
    <main>
      <Breadcrumb title="DOCENTES" />

      <div className="ed-team-area p-relative inner-style fix z-index pt-110 pb-90">
        <div className="container">
          <div className="it-team-title-wrap mb-40">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-6">
                <SectionTitle
                  itemClass="it-team-title-box text-center"
                  subTitleClass="ed-section-subtitle"
                  subTitle="DOCENTES"
                  titleClass="ed-section-title"
                  title="Conoce a nuestros docentes"
                />
              </div>
            </div>
          </div>
          
          <div className="row">
            {
              (docenteState.docentes.length > 0)
              ? (docenteState.docentes.map((teacher, index) => (
                  <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
                    <SingleTeamThree
                      teamImage={teamImg1}
                      authorName={teacher.usuario.name}
                      designation={teacher.designation}
                      socialLinks={teacher.socialLinks}
                    />
                  </div>
                )))
              : 
                (<p>No hay docentes</p>)
            }
          </div>
        </div>
      </div>
    </main>
  );
};export default TeacherMain;

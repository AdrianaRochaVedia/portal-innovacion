import React, { useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import SingleTeamThree from '../../components/Team/SingleTeamThree';
import KnowUs from '../../components/Sce/KnowUs';

import logoCentro from '../../assets/img/centro/logo-centro.jpeg';
import HeaderFive from '../../components/Header/HeaderFive';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCentro } from '../../redux/centro/thunk';

const CentroMain = () => {
  const centroState = useSelector((state) => state.centro);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCentro())
  }, [dispatch])

  // const teamMembers = [
  //   { image: teamImg1, name: "Fabian Sanchez", designation: "Presidente" },
  //   { image: teamImg2, name: "Prof. Marco Javier Villavicencio", designation: "Docente tiempo completo" },
  //   { image: teamImg3, name: "Willie Diaz", designation: "Docente" },
  //   { image: teamImg5, name: "Justin Clark", designation: "Docente" },
  //   { image: teamImg6, name: "Walter Skeete", designation: "Docente" },
  //   { image: teamImg7, name: "Willie Diaz", designation: "Docente" },
  //   { image: teamImg8, name: "Ann Dooley", designation: "Docente" },
  // ];
  return (
    <main>
      <HeaderFive />
      <Breadcrumb title="CENTRO DE ESTUDIANTES" />

      <div className="ed-team-area p-relative inner-style fix z-index pt-110 pb-90">
        {
          (centroState.isLoading)
          ? (<p>Centro no encontrado</p>)
          : 
          (
            <div className="container">
              <KnowUs
                title="Conoce a nuestra Centro de Estudiantes"
                subtitle={centroState.centros.name}
                paragraph={centroState.centros.objetive}
                image={logoCentro}
              />
              <div className="row">
                {centroState.centros.members.map((member, index) => (
                  <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
                    <SingleTeamThree
                      teamImage={member.photo ?? ""}
                      authorName={member.user.name ?? ""}
                      designation={member.role ?? ""}
                      socialLinks={member.socialLinks}
                    />
                  </div>
                ))}
              </div>
            </div>
          )
        }
      </div>
    </main>
  );
}; export default CentroMain;

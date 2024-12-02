import React, { useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import SectionTitle from '../../components/SectionTitle';
import SingleTeamThree from '../../components/Team/SingleTeamThree';

import teamImg1 from '../../assets/img/team/directora.png';
import { useDispatch } from 'react-redux';
import { getDocentes } from '../../redux/docentes/thunk';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TeacherMain = () => {
  const dispatch = useDispatch()
  const docenteState = useSelector((state) => state.docentes);
  const userState = useSelector((state) => state.users);

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
                {
                  (userState.rol && (userState.rol === "administrativo" || userState.rol === "Administrador" || userState.rol === "administrativo"))
                  ? 
                  (<button className='right_bt'>
                    <Link className="ed-btn-square" to="/registro-docente">
                      Registrar
                    </Link>
                  </button>)
                  :
                  (<></>)
                }
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

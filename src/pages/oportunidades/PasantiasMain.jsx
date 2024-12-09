import React, { useEffect} from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Listado from '../../components/oportunidades/Listado';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEmpresas } from './../../redux/empresas/thunk';
import SectionTitle from '../../components/SectionTitle';

const PasantiasMain = () => {

  const dispatch = useDispatch()
  const empresasState = useSelector((state) => state.empresas);
  const userState = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getEmpresas())
  }, [dispatch])

  
  return (
    <main>
      <Breadcrumb title="PRACTICAS PREPROFESIONALES" />
      <SectionTitle
          itemClass="it-team-title-box text-center"
          subTitleClass="ed-section-subtitle"
          subTitle="EMPRESAS ALIADAS"
          titleClass="ed-section-title"
          title="Conoce nuestras empresas aliadas"
      />
      {
          (userState.rol && (userState.rol === "administrativo" || userState.rol === "Administrador" || userState.rol === "administrativo"))
          ? 
          (<button className='right_bt'>
          <Link className="ed-btn-square" to="/src/pages/docente/RegistroDocente.js">
           Registrar
          </Link>
          </button>)
          :
          (<></>)
      }
      <Listado companies={empresasState.empresas} />
      
    </main>
  );
}; export default PasantiasMain;
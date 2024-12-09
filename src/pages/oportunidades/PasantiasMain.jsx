import React, { useEffect} from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Listado from '../../components/oportunidades/Listado';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEmpresas } from './../../redux/empresas/thunk';
import SectionTitle from '../../components/SectionTitle';
import ButtonWithArrow from '../../components/Forms/ButtonWithArrow';
import Modal from '../../components/Forms/Modal';
import EmpresasAliadasFormComponent from '../../components/Forms/Formularios/EmpresasAliadasForm';

const PasantiasMain = () => {

  const [isEmpresasModalOpen, setEmpresasModalOpen] = useState(false);
  const dispatch = useDispatch()
  const empresasState = useSelector((state) => state.empresas);
  const userState = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getEmpresas())
  }, [dispatch])

  const toggleEmpresasModal = () => {
    console.log("toggleEmpresasModal")
    setEmpresasModalOpen(!isEmpresasModalOpen);
  }

  
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
          (
            <div className="container">
                <ButtonWithArrow text="Nueva Empresa Aliada" onClick={toggleEmpresasModal} />
                <Modal isOpen={isEmpresasModalOpen} onClose={toggleEmpresasModal}>
                    <EmpresasAliadasFormComponent />
                </Modal>
            </div>
          )
          :
          (<></>)
      }
      <Listado companies={empresasState.empresas} />
            
    </main>
  );
}; export default PasantiasMain;
import React, { useState } from 'react';
import FooterTwo from '../../components/Footer/FooterTwo';
import HeaderFive from '../../components/Header/HeaderFive';
import Modal from '../../components/Forms/Modal';
import ButtonWithArrow from '../../components/Forms/ButtonWithArrow';
import NoticiasFormComponent from '../../components/Forms/Formularios/NoticiasForm';
import Logo from '../../assets/img/logo/logo-white-2.png';
import EmpresasAliadasFormComponent from '../../components/Forms/Formularios/EmpresasAliadasForm';
import UsuariosFormComponent from '../../components/Forms/Formularios/UsuariosForm';

const Sandbox = () => {
    // Estados para manejar cada modal de manera independiente
    const [isNoticiasModalOpen, setNoticiasModalOpen] = useState(false);
    const [isEmpresasModalOpen, setEmpresasModalOpen] = useState(false);
    const [isUsuariosModalOpen, setUsuariosModalOpen] = useState(false);

    const toggleNoticiasModal = () => setNoticiasModalOpen(!isNoticiasModalOpen);
    const toggleEmpresasModal = () => setEmpresasModalOpen(!isEmpresasModalOpen);
    const toggleUsuariosModal = () => setUsuariosModalOpen(!isUsuariosModalOpen);

    return (
        <>
            <HeaderFive />
            <div className="container">
                <ButtonWithArrow text="Nueva Noticia" onClick={toggleNoticiasModal} />
                <Modal isOpen={isNoticiasModalOpen} onClose={toggleNoticiasModal}>
                    <NoticiasFormComponent />
                </Modal>
            </div>
            <div className="container">
                <ButtonWithArrow text="Nueva Empresa Aliada" onClick={toggleEmpresasModal} />
                <Modal isOpen={isEmpresasModalOpen} onClose={toggleEmpresasModal}>
                    <EmpresasAliadasFormComponent />
                </Modal>
            </div>
            <div className="container">
                <ButtonWithArrow text="Nuevo Usuario" onClick={toggleUsuariosModal} />
                <Modal isOpen={isUsuariosModalOpen} onClose={toggleUsuariosModal}>
                    <UsuariosFormComponent />
                </Modal>
            </div>

            <FooterTwo
                footerClass="it-footer-area it-footer-bg it-footer-style-5 ed-footer-style-5 inner-style black-bg pb-70"
                footerLogo={Logo}
                btnClass="it-btn-white sky-bg"
                copyrightTextClass="it-copyright-text inner-style text-center"
            />
        </>
    );
};

export default Sandbox;
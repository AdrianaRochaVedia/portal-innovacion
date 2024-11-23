import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Listado from '../../components/oportunidades/Listado';

const companiesData = [
    {
      id: 1,
      logo: 'https://via.placeholder.com/150',
      name: 'Empresa Alpha',
      detailsLink: '/empresa/alpha',
      internships: [
        {
          image: 'https://via.placeholder.com/300x200',
          position: 'Desarrollador Backend',
          date: '1 de diciembre, 2024',
          detailsLink: '/internship/backend-alpha',
        },
        {
          image: 'https://via.placeholder.com/300x200',
          position: 'Diseñador UX/UI',
          date: '15 de diciembre, 2024',
          detailsLink: '/internship/uiux-alpha',
        },
      ],
    },
    {
      id: 2,
      logo: 'https://via.placeholder.com/150',
      name: 'Empresa Beta',
      detailsLink: '/empresa/beta',
      internships: [
        {
          image: 'https://via.placeholder.com/300x200',
          position: 'Ingeniero DevOps',
          date: '10 de enero, 2025',
          detailsLink: '/internship/devops-beta',
        },
      ],
    },
    {
      id: 3,
      logo: 'https://via.placeholder.com/150',
      name: 'Empresa Gamma',
      detailsLink: '/empresa/gamma',
      internships: [
        {
          image: 'https://via.placeholder.com/300x200',
          position: 'Desarrollador Frontend',
          date: '5 de febrero, 2025',
          detailsLink: '/internship/frontend-gamma',
        },
        {
          image: 'https://via.placeholder.com/300x200',
          position: 'Analista de Datos',
          date: '20 de febrero, 2025',
          detailsLink: '/internship/data-analyst-gamma',
        },
      ],
    },
    {
      id: 4,
      logo: 'https://via.placeholder.com/150',
      name: 'Empresa Delta',
      detailsLink: '/empresa/delta',
      internships: [
        {
          image: 'https://via.placeholder.com/300x200',
          position: 'Especialista en Marketing Digital',
          date: '1 de marzo, 2025',
          detailsLink: '/internship/digital-marketing-delta',
        },
        {
          image: 'https://via.placeholder.com/300x200',
          position: 'Community Manager',
          date: '15 de marzo, 2025',
          detailsLink: '/internship/community-manager-delta',
        },
      ],
    },
    {
      id: 5,
      logo: 'https://via.placeholder.com/150',
      name: 'Empresa Epsilon',
      detailsLink: '/empresa/epsilon',
      internships: [
        {
          image: 'https://via.placeholder.com/300x200',
          position: 'Administrador de Sistemas',
          date: '25 de marzo, 2025',
          detailsLink: '/internship/systems-admin-epsilon',
        },
        {
          image: 'https://via.placeholder.com/300x200',
          position: 'Desarrollador Full Stack',
          date: '10 de abril, 2025',
          detailsLink: '/internship/full-stack-epsilon',
        },
      ],
    },
    {
      id: 6,
      logo: 'https://via.placeholder.com/150',
      name: 'Empresa Zeta',
      detailsLink: '/empresa/zeta',
      internships: [
        {
          image: 'https://via.placeholder.com/300x200',
          position: 'Ingeniero de Software',
          date: '1 de mayo, 2025',
          detailsLink: '/internship/software-engineer-zeta',
        },
        {
          image: 'https://via.placeholder.com/300x200',
          position: 'Consultor de Negocios',
          date: '15 de mayo, 2025',
          detailsLink: '/internship/business-consultant-zeta',
        },
      ],
    },
];

const PasantiasMain = () => {
  return (
    <main>
      <Breadcrumb title="PRACTICAS PREPROFESIONALES" />

      <Listado companies={companiesData} />

    </main>
  );
}; export default PasantiasMain;
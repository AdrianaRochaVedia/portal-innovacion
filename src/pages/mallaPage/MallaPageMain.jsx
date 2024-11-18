import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Malla from '../../components/Malla';

const MallaPageMain = () => {
    return (
      <>
        <Breadcrumb title="Malla Curricular" subTitle="Malla" />
        <Malla/>
      </>
    );
}; export default MallaPageMain;
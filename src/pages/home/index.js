import React from 'react';
import HeaderThree from '../../components/Header/HeaderThree';
import FooterTwo from '../../components/Footer/FooterTwo';
import HomeThreeMain from './HomeThreeMain';

import Logo from '../../assets/img/logo/logo-innovacion-3.png';

const MainPage = () => {
  return (
    <>
      <HeaderThree />
      <HomeThreeMain />
      <FooterTwo
        footerClass="it-footer-area it-footer-bg it-footer-style-5 ed-footer-style-2 ed-footer-style-3 black-bg pb-70"
        footerLogo={Logo}
        btnClass="it-btn-white purple-2"
      />
    </>
  );
};
export default MainPage;

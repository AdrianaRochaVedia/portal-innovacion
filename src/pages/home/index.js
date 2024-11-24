import React, { useEffect } from 'react';
import HeaderThree from '../../components/Header/HeaderThree';
import FooterTwo from '../../components/Footer/FooterTwo';
import HomeMain from './HomeThreeMain';

import Logo from '../../assets/img/logo/logo-innovacion-3.png';
import { loginUser } from '../../queries/auth';

const MainPage = () => {

  useEffect(() => {
    loginUser("adriana@gmail.com", "1234567")
      .then(res => {
        console.log(res.data.name)
      })
      .catch(error => console.error(error))
  }, [])
  

  return (
    <>
      <HeaderThree />
      <HomeMain />
      <FooterTwo
        footerClass="it-footer-area it-footer-bg it-footer-style-5 ed-footer-style-2 ed-footer-style-3 black-bg pb-70"
        footerLogo={Logo}
        btnClass="it-btn-white purple-2"
      />
    </>
  );
};
export default MainPage;

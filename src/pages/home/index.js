import React, { useEffect } from 'react';
import HeaderThree from '../../components/Header/HeaderThree';
import FooterTwo from '../../components/Footer/FooterTwo';
import HomeMain from './HomeThreeMain';

import Logo from '../../assets/img/logo/logo-innovacion-3.png';
import { crearNoticias } from '../../queries/news';
import { loginUser } from '../../queries/auth';

const MainPage = () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NzNiOWRlZTA4MzBkYzhkNGJlYjhlODYiLCJuYW1lIjoiQWRyaWFuYSIsImlhdCI6MTczMjQ3NTc2MywiZXhwIjoxNzMyNTYyMTYzfQ.pyzFcWakP55zTT4_aTCxwVZQTaMn6IfToF1SjBhdONE"; 
  useEffect(() => {
    crearNoticias("Noticia Prueba Fronted","Para prueba","2022-12-05 14:30:00",token)
      .then(res => {
        console.log(res.data)
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

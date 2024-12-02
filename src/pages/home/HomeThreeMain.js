import React from 'react';
import About from './AboutSection';
import Blog from './BlogSection';
import Career from './CareerSection';
import Category from './CategorySection';
import Course from './CourseSection';
import Event from './EventSection';
import Banner from './HomeThreeBanner';
import Testimonial from './TestimonialSection';
import Video from './VideoSection';
import SideBarMenu from '../../components/SideBarMenu';

const HomeMain = () => {
  return (
    <main>
      <Banner />
      <SideBarMenu
        sections={[
          "Mision y Vision",
          "Areas de Estudio y Modalidades de Graduacion",
          "Oportunidades",
          "Conoce mas",
          "Experiencias de Ex alumnos",
          "Eventos",
          "Noticias",
        ]}
      />
      <div id="mision-y-vision">
        <Career />
      </div>
      <div id="areas-de-estudio-y-modalidades-de-graduacion">
        <Category />
      </div>
      <div id="oportunidades">
        <About />
      </div>
      <div id="conoce-mas">
        <Video />
      </div>
      <div id="experiencias-de-ex-alumnos">
        <Testimonial />
      </div>
      <div id="eventos">
        <Event />
      </div>
      <div id="noticias">
        <Blog />
      </div>
  </main>
  );
};
export default HomeMain;

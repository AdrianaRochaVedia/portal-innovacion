import React from 'react';
import About from './AboutSection';
import Blog from './BlogSection';
import Career from './CareerSection';
import Category from './CategorySection';
import Contact from './ContactSection';
import Course from './CourseSection';
import Event from './EventSection';
import FunFact from './FunFactSection';
import Banner from './HomeThreeBanner';
import Testimonial from './TestimonialSection';
import Video from './VideoSection';

const HomeThreeMain = () => {
  return (
    <main>
      <Banner />
      <Career />
      <Category />
      <About />
      {/* <FunFact /> */}
      <Course />
      <Video />
      <Testimonial />
      {/* <Contact /> */}
      <Event />
      <Blog />
    </main>
  );
};
export default HomeThreeMain;

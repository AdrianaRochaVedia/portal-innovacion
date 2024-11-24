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

const HomeMain = () => {
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
export default HomeMain;

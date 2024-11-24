import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import RightArrow from '../SVG';

const News = (props) => {
  const {
    itemClass,
    blogImages, 
    publishedDate,
    authorName,
    title,
    btnClass,
    btnText,
    id,
  } = props;

  const sliderOption = {
    speed: 1000,
    loop: true,
    slidesPerView: '1',
    autoplay: {
      delay: 5000,
    },
    navigation: {
      prevEl: '.news-arrow-prev',
      nextEl: '.news-arrow-next',
    },
  };

  return (
    <div className={itemClass ? itemClass : 'postbox__thumb-box mb-80'}>
      <div className="postbox__main-thumb mb-30">
        {blogImages && blogImages.length > 1 ? (
          <>
            <Swiper modules={[Autoplay, Navigation]} {...sliderOption} className="swiper-wrapper">
              {blogImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Slide ${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="news-slider-arrow-wrap">
              <button className="news-arrow-prev">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button className="news-arrow-next">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </>
        ) : (
          <img src={blogImages?.[0]} alt="" />
        )}
      </div>
      <div className="postbox__content-box">
        <div className="postbox__meta">
          <span>
            <i className="fa-solid fa-calendar-days"></i>
            {publishedDate ? publishedDate : 'April 21, 2024'}
          </span>
          <span>
            <i className="fal fa-user"></i>
            {authorName ? authorName : 'Alamgir Chowdhuri'}
          </span>
        </div>
        <h4 className="postbox__details-title">
        <Link to={`/news-details/${id}`}>
          {title
            ? title
            : 'Curabitur at fermentum purus. Interdum et malesuada fames ac ante ipsum'}
        </Link>
        </h4>
        <Link
          className={btnClass ? btnClass : 'ed-btn-theme'}
          to={`/news-details/${id}`}
        >
          {btnText ? btnText : 'read more'}
          <i>
            <RightArrow />
          </i>
        </Link>
      </div>
    </div>
  );
};

export default News;
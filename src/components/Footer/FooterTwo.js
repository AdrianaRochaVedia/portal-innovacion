import React from 'react';
import { Link } from 'react-router-dom';

import footerBG from '../../assets/img/footer/bg-1-1.jpg';
import Logo from '../../assets/img/logo/logo-innovacion-3.png';

const FooterTwo = (props) => {
  const { footerClass, footerLogo, btnClass, copyrightTextClass } = props;

  return (
    <footer>
      <div
        className={
          'it-footer-area it-footer-bg it-footer-style-5 ed-footer-style-2 black-bg pb-10'
        }
        style={{ backgroundImage: `url(${footerBG})` }}
      >
        <div className="it-footer-border">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="it-footer-top-info d-flex align-items-center it-footer-top-col-1 pb-10">
                  <div className="it-footer-top-icon">
                    <span>
                      <i className="fa-light fa-location-dot"></i>
                    </span>
                  </div>
                  <div className="it-footer-top-text">
                    <span>Address:</span>
                    <a
                      target="_blank"
                      href="https://g.co/kgs/u81c7N6" rel="noreferrer"
                    >
                      Universidad Católica Boliviana "San Pablo"
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="it-footer-top-info d-flex align-items-center it-footer-top-col-2">
                  <div className="it-footer-top-icon">
                    <span>
                      <i className="fa-light fa-phone phone"></i>
                    </span>
                  </div>
                  <div className="it-footer-top-text">
                    <span>Phone:</span>
                    <a href="tel:00875784568">2782222</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="it-footer-top-info d-flex align-items-center justify-content-md-end border-none it-footer-top-col-3">
                  <div className="it-footer-top-icon">
                    <span>
                      <i className="fa-light fa-envelope"></i>
                    </span>
                  </div>
                  <div className="it-footer-top-text">
                    <span>Email:</span>
                    <a href="mailto:info@gmail.com">sreintsch@ucb.edu.bo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="it-footer-wrap pt-10">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="it-footer-widget footer-col-5">
                  <div className="it-footer-logo pb-25">
                    <Link to="/">
                      <img src={Logo} alt="" />
                    </Link>
                  </div>
                  <div className="it-footer-text pb-5">
                    <p>
                      Interdum velit laoreet id donec ultrices <br />
                      tincidunt arcu. Tincidunt tortor aliqua <br />
                      mfacilisi cras fermentum odio eu.
                    </p>
                  </div>
                  <div className="it-footer-social">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-pinterest-p"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-8 mb-10 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <div className="it-footer-widget footer-col-8">
                  <h4 className="it-footer-title">Subscribete</h4>
                  <div className="it-footer-input-box p-relative">
                    <input
                      className="mb-20"
                      type="email"
                      placeholder="Ingresa tu correo:"
                    />
                    <button
                      className={btnClass ? btnClass : 'it-btn-white sky-bg'}
                    >
                      <span>SUBSCRIBETE AHORA</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="it-copyright-area it-copyright-height">
        <div className="container">
          <div className="row">
            <div
              className="col-12 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div
                className={
                  copyrightTextClass
                    ? copyrightTextClass
                    : 'it-copyright-text style-2 text-center'
                }
              >
                <p>
                  Copyright &copy; 2024 <a href="">UCB </a> || All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterTwo;

import React from "react";

const HomeSlider = () => {
  return (
    <section
      className="mh-home image-bg header-slider header-slider-preloader"
      id="header-slider"
    >
      <div
        className="animation-slides owl-carousel owl-theme"
        id="animation-slide"
      >
        <div className="item">
          <div
            style={{
              backgroundImage: "url(/images/slider/1.jpg)",
            }}
          ></div>
        </div>

        <div className="item">
          <div
            style={{
              backgroundImage: "url(/images/slider/2.jpg)",
            }}
          ></div>
        </div>

        <div className="item">
          <div
            style={{
              backgroundImage: "url(/images/slider/3.jpg)",
            }}
          ></div>
        </div>
      </div>

      <div className="img-foverlay img-color-overlay">
        <div className="container">
          <div className="row section-separator xs-column-reverse vertical-middle-content home-padding">
            <div className="col-sm-6">
              <div className="mh-header-info">
                <div
                  className="mh-promo wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.1s"
                >
                  <span>Hello I'm</span>
                </div>

                <h2
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                >
                  Long Vu
                </h2>
                <h4
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.3s"
                >
                  Fullstack Developer
                </h4>

                <ul>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.4s"
                  >
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:">longersoft@gmail.com</a>
                  </li>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.5s"
                  >
                    <i className="fa fa-phone"></i>
                    <a href="callto:">+84 909901985</a>
                  </li>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.6s"
                  >
                    <i className="fa fa-map-marker"></i>
                    <address>HCM, Vietnam</address>
                  </li>
                </ul>

                <ul
                  className="social-icon wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.7s"
                >
                  <li>
                    <a target="_blank" href="https://facebook.com/longersoft">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://tweeter.com/longersoft">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://github.com/longersoft">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://linkedin.com/longersoft">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div
                className="hero-img wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.6s"
              >
                <div className="img-border">
                  <img src="/images/hero.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;

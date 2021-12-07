import React from "react";

const About = () => {
  return (
    <section className="mh-about" id="mh-about">
      <div className="container">
        <div className="row section-separator">
          <div className="col-sm-12 col-md-6">
            <div
              className="mh-about-img shadow-2 wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.4s"
            >
              <img src="/images/ab-img.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="mh-about-inner">
              <h2
                className="wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.1s"
              >
                About Me
              </h2>
              <p
                className="wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
                Hello, I’m a Long Vu, web-developer based on HCM City. I have
                rich experience in web site design & building and customization.
                Also I am good at
              </p>
              <div
                className="mh-about-tag wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.3s"
              >
                <ul>
                  <li>
                    <span>php</span>
                  </li>
                  <li>
                    <span>html</span>
                  </li>
                  <li>
                    <span>css</span>
                  </li>
                  <li>
                    <span>php</span>
                  </li>
                  <li>
                    <span>wordpress</span>
                  </li>
                  <li>
                    <span>Symfony</span>
                  </li>
                  <li>
                    <span>React</span>
                  </li>
                  <li>
                    <span>Javascript</span>
                  </li>
                  <li>
                    <span>Python</span>
                  </li>
                </ul>
              </div>
              <a
                href="/document/CV-LongVu.pdf"
                className="btn btn-fill wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.4s"
                target="_blank"
              >
                Download CV <i className="fa fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

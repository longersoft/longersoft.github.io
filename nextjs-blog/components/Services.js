import React from "react";

const Services = () => {
  return (
    <section className="mh-service">
      <div className="container">
        <div className="row section-separator">
          <div
            className="col-sm-12 text-center section-title wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.2s"
          >
            <h2>What I do</h2>
          </div>
          <div className="col-sm-4">
            <div
              className="mh-service-item shadow-1 dark-bg wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.3s"
            >
              <i className="fa fa-bullseye purple-color"></i>
              <h3>UI Design</h3>
              <p>
                User interface (UI) design is the process designers use to build
                interfaces in software or computerized devices, focusing on
                looks or style. Designers aim to create interfaces which users
                find easy to use and pleasurable. UI design refers to graphical
                user interfaces and other forms—e.g., voice-controlled
                interfaces.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="mh-service-item shadow-1 dark-bg wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.5s"
            >
              <i className="fa fa-code iron-color"></i>
              <h3>Web Development</h3>
              <p>
                Every Web Developer must have a basic understanding of HTML,
                CSS, and JavaScript. Responsive Web Design is used in all types
                of modern web development
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="mh-service-item shadow-1 dark-bg wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.7s"
            >
              <i className="fa fa-object-ungroup sky-color"></i>
              <h3>App Development</h3>
              <p>
                App Development refers to the creation of computer applications
                for use on mobile devices such as tablets, smartphones and smart
                watches. Mobile device features such as cameras, motion and
                location awareness can be used to create unique and inventive
                mobile-only applications for things such as taxi and bike
                sharing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import Head from "next/head";
import Link from "next/link";
import Menu from "./Menu";

const menu = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
  {
    label: "Categories",
    href: "/categories",
    submenu: [
      { label: "HTML", href: "/categories/html" },
      { label: "Wordpress", href: "/categories/wordpress" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Styles", href: "/styles" },
];

const Layout = ({ children }) => {
  return (
    <div id="top">
      <Head>
        <title>Long Vu's Portfolio</title>

        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Long Vu cv/resume." />
        <meta
          name="keywords"
          content="creative, cv, designer,  online cv, online resume, powerful portfolio, professional, professional resume, responsive, resume, vcard"
        />
        <meta name="developer" content="Long Vu" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/apple-icon.png" />
        <link rel="shortcut icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link
          rel="shortcut icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />

        <link href="/css/css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/owl.css" />
        <link rel="stylesheet" href="/css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/css/mh-slider.css" />

        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/responsive.css" />

        <link rel="stylesheet" href="/css/defauld.css" title="defauld" />

        <script
          type="text/javascript"
          charset="UTF-8"
          src="/js/common.js"
        ></script>
        <script
          type="text/javascript"
          charset="UTF-8"
          src="/js/util.js"
        ></script>
      </Head>
      <Menu menu={menu} />
      {children}
      <body class="dark-vertion home-slider black-bg">
        {/* <!-- Start Loader --> */}
        <div class="section-loader" style={{ display: "none" }}>
          <div class="loader">
            <div></div>
            <div></div>
          </div>
        </div>
        {/* <!-- End Loader --> */}

        {/* <!--
        ===================
           NAVIGATION
        ===================
        --> */}
        <header
          class="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav"
          id="mh-header"
        >
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <nav class="navbar navbar-expand-lg mh-nav nav-btn">
                <a
                  class="navbar-brand"
                  href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html#"
                >
                  <img
                    src="/images/fedalon_logo.png"
                    alt="maha"
                    class="img-fluid"
                  />
                  {/* <!-- <h2>Maha</h2> --> */}
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav mr-0 ml-auto">
                    <li class="nav-item active">
                      <a
                        class="nav-link"
                        href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html#mh-home"
                      >
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html#mh-about"
                      >
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html#mh-skills"
                      >
                        Skills
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html#mh-experience"
                      >
                        Experiences
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html#mh-portfolio"
                      >
                        Portfolio
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html#mh-pricing"
                      >
                        Pricing
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html#mh-blog"
                      >
                        Blog
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html#mh-contact"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>

        <section
          class="mh-home image-bg header-slider header-slider-preloader"
          id="header-slider"
        >
          <div
            class="animation-slides owl-carousel owl-theme owl-loaded"
            id="animation-slide"
          >
            {/* <!--Slide 1-->

        <!--Slide 2-->

        <!--Slide 3--> */}

            <div class="owl-stage-outer owl-height" style={{ height: "946px" }}>
              <div class="owl-stage cs_style1">
                <div class="owl-item cloned cs_style2">
                  <div class="item">
                    <div
                      style={{
                        backgroundImage: "url(/images/slider/2.jpg)",
                      }}
                    ></div>
                  </div>
                </div>
                <div class="owl-item cloned cs_style2">
                  <div class="item">
                    <div
                      style={{
                        backgroundImage: "url(/images/slider/3.jpg)",
                      }}
                    ></div>
                  </div>
                </div>
                <div class="owl-item cs_style2">
                  <div class="item">
                    <div
                      style={{
                        backgroundImage: "url(/images/slider/1.jpg)",
                      }}
                    ></div>
                  </div>
                </div>
                <div class="owl-item cs_style2">
                  <div class="item">
                    <div
                      style={{
                        backgroundImage: "url(/images/slider/2.jpg)",
                      }}
                    ></div>
                  </div>
                </div>
                <div class="owl-item animated owl-animated-in zoomIn active cs_style2">
                  <div class="item">
                    <div
                      style={{
                        backgroundImage: "url(/images/slider/3.jpg)",
                      }}
                    ></div>
                  </div>
                </div>
                <div class="owl-item cloned animated owl-animated-in zoomIn cs_style2">
                  <div class="item">
                    <div
                      style={{
                        backgroundImage: "url(/images/slider/1.jpg)",
                      }}
                    ></div>
                  </div>
                </div>
                <div class="owl-item cloned cs_style2">
                  <div class="item">
                    <div
                      style={{
                        backgroundImage: "url(/images/slider/2.jpg)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="owl-controls">
              <div class="owl-nav">
                <div class="owl-prev" style={{ display: "none" }}>
                  <i class="fa fa-angle-left"></i>
                </div>
                <div class="owl-next" style={{ display: "none" }}>
                  <i class="fa fa-angle-right"></i>
                </div>
              </div>
              <div class="owl-dots" style={{ display: "none" }}></div>
            </div>
          </div>

          <div class="img-foverlay img-color-overlay">
            <div class="container">
              <div
                class="
              row
              section-separator
              xs-column-reverse
              vertical-middle-content
              home-padding
            "
              >
                <div class="col-sm-6">
                  <div class="mh-header-info">
                    <div
                      class="mh-promo wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.1s"
                      style="
                    visibility: visible;
                    animation-duration: 0.8s;
                    animation-delay: 0.1s;
                    animation-name: fadeInUp;
                  "
                    >
                      <span>Hello I'm</span>
                    </div>

                    <h2
                      class="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.2s"
                      style="
                    visibility: visible;
                    animation-duration: 0.8s;
                    animation-delay: 0.2s;
                    animation-name: fadeInUp;
                  "
                    >
                      Alex Johnson
                    </h2>
                    <h4
                      class="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.3s"
                      style="
                    visibility: visible;
                    animation-duration: 0.8s;
                    animation-delay: 0.3s;
                    animation-name: fadeInUp;
                  "
                    >
                      Product Designer
                    </h4>

                    <ul>
                      <li
                        class="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.4s"
                        style="
                      visibility: visible;
                      animation-duration: 0.8s;
                      animation-delay: 0.4s;
                      animation-name: fadeInUp;
                    "
                      >
                        <i class="fa fa-envelope"></i>
                        <a href="mailto:">getemail@email.com</a>
                      </li>
                      <li
                        class="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.5s"
                        style="
                      visibility: visible;
                      animation-duration: 0.8s;
                      animation-delay: 0.5s;
                      animation-name: fadeInUp;
                    "
                      >
                        <i class="fa fa-phone"></i>
                        <a href="callto:">+12 986 987 7867</a>
                      </li>
                      <li
                        class="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.6s"
                        style="
                      visibility: visible;
                      animation-duration: 0.8s;
                      animation-delay: 0.6s;
                      animation-name: fadeInUp;
                    "
                      >
                        <i class="fa fa-map-marker"></i>
                        <address>37, Pollsatnd, New York, United State</address>
                      </li>
                    </ul>

                    <ul
                      class="social-icon wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.7s"
                      style="
                    visibility: visible;
                    animation-duration: 0.8s;
                    animation-delay: 0.7s;
                    animation-name: fadeInUp;
                  "
                    >
                      <li>
                        <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                          <i class="fa fa-github"></i>
                        </a>
                      </li>
                      <li>
                        <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                          <i class="fa fa-dribbble"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div
                    class="hero-img wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.6s"
                    style="
                  visibility: visible;
                  animation-duration: 0.8s;
                  animation-delay: 0.6s;
                  animation-name: fadeInUp;
                "
                  >
                    <div class="img-border">
                      <img src="/images/hero.png" alt="" class="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--
        ===================
           ABOUT
        ===================
        --> */}
        <section class="mh-about" id="mh-about">
          <div class="container">
            <div class="row section-separator">
              <div class="col-sm-12 col-md-6">
                <div
                  class="mh-about-img shadow-2 wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.4s"
                  style="
                visibility: hidden;
                animation-duration: 0.8s;
                animation-delay: 0.4s;
                animation-name: none;
              "
                >
                  <img src="/images/ab-img.png" alt="" class="img-fluid" />
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="mh-about-inner">
                  <h2
                    class="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.1s"
                    style="
                  visibility: hidden;
                  animation-duration: 0.8s;
                  animation-delay: 0.1s;
                  animation-name: none;
                "
                  >
                    About Me
                  </h2>
                  <p
                    class="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.2s"
                    style="
                  visibility: hidden;
                  animation-duration: 0.8s;
                  animation-delay: 0.2s;
                  animation-name: none;
                "
                  >
                    Hello, I’m a Patrick, web-developer based on Paris. I have
                    rich experience in web site design &amp; building and
                    customization. Also I am good at
                  </p>
                  <div
                    class="mh-about-tag wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s"
                    style="
                  visibility: hidden;
                  animation-duration: 0.8s;
                  animation-delay: 0.3s;
                  animation-name: none;
                "
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
                        <span>React</span>
                      </li>
                      <li>
                        <span>Javascript</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html"
                    class="btn btn-fill wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.4s"
                    style="
                  visibility: hidden;
                  animation-duration: 0.8s;
                  animation-delay: 0.4s;
                  animation-name: none;
                "
                  >
                    Downlaod CV <i class="fa fa-download"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--
        ===================
           SERVICE
        ===================
        --> */}
        <section class="mh-service">
          <div class="container">
            <div class="row section-separator">
              <div
                class="col-sm-12 text-center section-title wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
                style="
              visibility: hidden;
              animation-duration: 0.8s;
              animation-delay: 0.2s;
              animation-name: none;
            "
              >
                <h2>What I do</h2>
              </div>
              <div class="col-sm-4">
                <div
                  class="mh-service-item shadow-1 dark-bg wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.3s"
                  style="
                visibility: hidden;
                animation-duration: 0.8s;
                animation-delay: 0.3s;
                animation-name: none;
              "
                >
                  <i class="fa fa-bullseye purple-color"></i>
                  <h3>UI Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </div>
              </div>
              <div class="col-sm-4">
                <div
                  class="mh-service-item shadow-1 dark-bg wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.5s"
                  style="
                visibility: hidden;
                animation-duration: 0.8s;
                animation-delay: 0.5s;
                animation-name: none;
              "
                >
                  <i class="fa fa-code iron-color"></i>
                  <h3>Web Development</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </div>
              </div>
              <div class="col-sm-4">
                <div
                  class="mh-service-item shadow-1 dark-bg wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.7s"
                  style="
                visibility: hidden;
                animation-duration: 0.8s;
                animation-delay: 0.7s;
                animation-name: none;
              "
                >
                  <i class="fa fa-object-ungroup sky-color"></i>
                  <h3>App Development</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--
        ===================
          FEATURE PROJECTS
        ===================
        --> */}
        <section class="mh-featured-project image-bg featured-img-one">
          <div class="img-color-overlay">
            <div class="container">
              <div class="row section-separator">
                <div class="section-title col-sm-12">
                  <h3>Featured Projects</h3>
                </div>
                <div class="col-sm-12">
                  <div
                    class="
                  mh-single-project-slide-by-side
                  row
                  owl-carousel owl-theme owl-responsive-1170 owl-loaded
                "
                  >
                    {/* <!-- Project Items -->

                <!-- Project Items -->

                <!-- Project Items --> */}

                    <div class="owl-stage-outer">
                      <div
                        class="owl-stage"
                        style="
                      transform: translate3d(0px, 0px, 0px);
                      transition: all 0s ease 0s;
                      width: 3330px;
                    "
                      >
                        <div class="owl-item active cs_style3">
                          <div class="col-sm-12 mh-featured-item">
                            <div class="row">
                              <div class="col-sm-7">
                                <div
                                  class="
                                mh-featured-project-img
                                shadow-2
                                wow
                                fadeInUp
                              "
                                  data-wow-duration="0.8s"
                                  data-wow-delay="0.2s"
                                  style="
                                visibility: hidden;
                                animation-duration: 0.8s;
                                animation-delay: 0.2s;
                                animation-name: none;
                              "
                                >
                                  <img
                                    src="/images/p-2.png"
                                    alt=""
                                    class="img-fluid"
                                  />
                                </div>
                              </div>
                              <div class="col-sm-5">
                                <div class="mh-featured-project-content">
                                  <h4
                                    class="project-category wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.4s"
                                    style="
                                  visibility: hidden;
                                  animation-duration: 0.8s;
                                  animation-delay: 0.4s;
                                  animation-name: none;
                                "
                                  >
                                    Web Design
                                  </h4>
                                  <h2
                                    class="wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.5s"
                                    style="
                                  visibility: hidden;
                                  animation-duration: 0.8s;
                                  animation-delay: 0.5s;
                                  animation-name: none;
                                "
                                  >
                                    Wrap
                                  </h2>
                                  <span
                                    class="wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.6s"
                                    style="
                                  visibility: hidden;
                                  animation-duration: 0.8s;
                                  animation-delay: 0.6s;
                                  animation-name: none;
                                "
                                  >
                                    Design &amp; Development
                                  </span>
                                  <p
                                    class="wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.7s"
                                    style="
                                  visibility: hidden;
                                  animation-duration: 0.8s;
                                  animation-delay: 0.7s;
                                  animation-name: none;
                                "
                                  >
                                    Stamp is a clean and elegant Multipurpose
                                    Landing Page Template. It will fit perfectly
                                    for Startup, Web App or any type of Web
                                    Services. It has 4 background styles with 6
                                    homepage styles. 6 pre-defined color scheme.
                                    All variations are organized separately so
                                    you can use / customize the template very
                                    easily.
                                  </p>
                                  <a
                                    href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html"
                                    class="btn btn-fill wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.7s"
                                    style="
                                  visibility: hidden;
                                  animation-duration: 0.8s;
                                  animation-delay: 0.7s;
                                  animation-name: none;
                                "
                                  >
                                    View Details
                                  </a>
                                  <div
                                    class="
                                  mh-testimonial mh-project-testimonial
                                  wow
                                  fadeInUp
                                  owl-carousel
                                  owl-theme
                                  owl-responsive-1170
                                  owl-loaded
                                "
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.9s"
                                    style="
                                  visibility: hidden;
                                  animation-duration: 0.8s;
                                  animation-delay: 0.9s;
                                  animation-name: none;
                                "
                                  >
                                    <div class="owl-stage-outer">
                                      <div
                                        class="owl-stage"
                                        style="
                                      transform: translate3d(-866px, 0px, 0px);
                                      transition: all 0s ease 0s;
                                      width: 3031px;
                                    "
                                      >
                                        <div
                                          class="owl-item cloned"
                                          style="width: 433px; margin-right: 0px"
                                        >
                                          <blockquote>
                                            <q>
                                              Creative Template - suits my needs
                                              perfectly whilst allowing me to
                                              learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                        <div
                                          class="owl-item cloned"
                                          style="width: 433px; margin-right: 0px"
                                        >
                                          <blockquote>
                                            <q>
                                              Organize Code - suits my needs
                                              perfectly whilst allowing me to
                                              learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                        <div
                                          class="owl-item active"
                                          style="width: 433px; margin-right: 0px"
                                        >
                                          <blockquote>
                                            <q>
                                              Excellent Template - suits my
                                              needs perfectly whilst allowing me
                                              to learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                        <div
                                          class="owl-item"
                                          style="width: 433px; margin-right: 0px"
                                        >
                                          <blockquote>
                                            <q>
                                              Creative Template - suits my needs
                                              perfectly whilst allowing me to
                                              learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                        <div
                                          class="owl-item"
                                          style="width: 433px; margin-right: 0px"
                                        >
                                          <blockquote>
                                            <q>
                                              Organize Code - suits my needs
                                              perfectly whilst allowing me to
                                              learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                        <div
                                          class="owl-item cloned"
                                          style="width: 433px; margin-right: 0px"
                                        >
                                          <blockquote>
                                            <q>
                                              Excellent Template - suits my
                                              needs perfectly whilst allowing me
                                              to learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                        <div
                                          class="owl-item cloned"
                                          style="width: 433px; margin-right: 0px"
                                        >
                                          <blockquote>
                                            <q>
                                              Creative Template - suits my needs
                                              perfectly whilst allowing me to
                                              learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="owl-controls">
                                      <div class="owl-nav">
                                        <div
                                          class="owl-prev"
                                          style={{ display: "none" }}
                                        >
                                          prev
                                        </div>
                                        <div
                                          class="owl-next"
                                          style={{ display: "none" }}
                                        >
                                          next
                                        </div>
                                      </div>
                                      <div
                                        class="owl-dots"
                                        style={{ display: "none" }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="owl-item cs_style3">
                          <div class="col-sm-12 mh-featured-item">
                            <div class="row">
                              <div class="col-sm-7">
                                <div
                                  class="
                                mh-featured-project-img
                                shadow-2
                                wow
                                fadeInUp
                              "
                                  data-wow-duration="0.8s"
                                  data-wow-delay="0.2s"
                                  style="
                                visibility: hidden;
                                animation-duration: 0.8s;
                                animation-delay: 0.2s;
                                animation-name: none;
                              "
                                >
                                  <img
                                    src="/images/p-2.png"
                                    alt=""
                                    class="img-fluid"
                                  />
                                </div>
                              </div>
                              <div class="col-sm-5">
                                <div class="mh-featured-project-content">
                                  <h4
                                    class="project-category wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.4s"
                                    style="
                                  visibility: hidden;
                                  animation-duration: 0.8s;
                                  animation-delay: 0.4s;
                                  animation-name: none;
                                "
                                  >
                                    Web Design
                                  </h4>
                                  <h2
                                    class="wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.5s"
                                    style="
                                  visibility: hidden;
                                  animation-duration: 0.8s;
                                  animation-delay: 0.5s;
                                  animation-name: none;
                                "
                                  >
                                    Wrap
                                  </h2>
                                  <span
                                    class="wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.6s"
                                    style="
                                  visibility: hidden;
                                  animation-duration: 0.8s;
                                  animation-delay: 0.6s;
                                  animation-name: none;
                                "
                                  >
                                    Design &amp; Development
                                  </span>
                                  <p
                                    class="wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.7s"
                                    style="
                                  visibility: hidden;
                                  animation-duration: 0.8s;
                                  animation-delay: 0.7s;
                                  animation-name: none;
                                "
                                  >
                                    Stamp is a clean and elegant Multipurpose
                                    Landing Page Template. It will fit perfectly
                                    for Startup, Web App or any type of Web
                                    Services. It has 4 background styles with 6
                                    homepage styles. 6 pre-defined color scheme.
                                    All variations are organized separately so
                                    you can use / customize the template very
                                    easily.
                                  </p>
                                  <a
                                    href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html"
                                    class="btn btn-fill wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.7s"
                                    style="
                                  visibility: hidden;
                                  animation-duration: 0.8s;
                                  animation-delay: 0.7s;
                                  animation-name: none;
                                "
                                  >
                                    View Details
                                  </a>
                                  <div
                                    class="
                                  mh-testimonial mh-project-testimonial
                                  wow
                                  fadeInUp
                                  owl-carousel
                                  owl-theme
                                  owl-responsive-1170
                                  owl-loaded
                                "
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.9s"
                                    style="
                                  visibility: hidden;
                                  animation-duration: 0.8s;
                                  animation-delay: 0.9s;
                                  animation-name: none;
                                "
                                  >
                                    <div class="owl-stage-outer">
                                      <div
                                        class="owl-stage"
                                        style="
                                      transform: translate3d(-866px, 0px, 0px);
                                      transition: all 0s ease 0s;
                                      width: 3031px;
                                    "
                                      >
                                        <div
                                          class="owl-item cloned"
                                          style="width: 433px; margin-right: 0px"
                                        >
                                          <blockquote>
                                            <q>
                                              Creative Template - suits my needs
                                              perfectly whilst allowing me to
                                              learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                        <div
                                          class="owl-item cloned"
                                          style="width: 433px; margin-right: 0px"
                                        >
                                          <blockquote>
                                            <q>
                                              Organize Code - suits my needs
                                              perfectly whilst allowing me to
                                              learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                        <div
                                          class="owl-item active"
                                          style="width: 433px; margin-right: 0px"
                                        >
                                          <blockquote>
                                            <q>
                                              Excellent Template - suits my
                                              needs perfectly whilst allowing me
                                              to learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                        <div
                                          class="owl-item"
                                          style="width: 433px; margin-right: 0px"
                                        >
                                          <blockquote>
                                            <q>
                                              Creative Template - suits my needs
                                              perfectly whilst allowing me to
                                              learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                        <div
                                          class="owl-item"
                                          style="width: 433px; margin-right: 0px"
                                        >
                                          <blockquote>
                                            <q>
                                              Organize Code - suits my needs
                                              perfectly whilst allowing me to
                                              learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                        <div
                                          class="owl-item cloned"
                                          style="width: 433px; margin-right: 0px"
                                        >
                                          <blockquote>
                                            <q>
                                              Excellent Template - suits my
                                              needs perfectly whilst allowing me
                                              to learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                        <div
                                          class="owl-item cloned"
                                          style="width: 433px; margin-right: 0px"
                                        >
                                          <blockquote>
                                            <q>
                                              Creative Template - suits my needs
                                              perfectly whilst allowing me to
                                              learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="owl-controls">
                                      <div class="owl-nav">
                                        <div
                                          class="owl-prev"
                                          style={{ display: "none" }}
                                        >
                                          prev
                                        </div>
                                        <div
                                          class="owl-next"
                                          style={{ display: "none" }}
                                        >
                                          next
                                        </div>
                                      </div>
                                      <div
                                        class="owl-dots"
                                        style={{ display: "none" }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="owl-item cs_style3">
                          <div class="col-sm-12 mh-featured-item">
                            <div class="row">
                              <div class="col-sm-7">
                                <div
                                  class="
                                mh-featured-project-img
                                shadow-2
                                wow
                                fadeInUp
                              "
                                  data-wow-duration="0.8s"
                                  data-wow-delay="0.2s"
                                  style="
                                visibility: hidden;
                                animation-duration: 0.8s;
                                animation-delay: 0.2s;
                                animation-name: none;
                              "
                                >
                                  <img
                                    src="/images/p-2.png"
                                    alt=""
                                    class="img-fluid"
                                  />
                                </div>
                              </div>
                              <div class="col-sm-5">
                                <div class="mh-featured-project-content">
                                  <h4
                                    class="project-category wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.4s"
                                    style="
                                  visibility: hidden;
                                  animation-duration: 0.8s;
                                  animation-delay: 0.4s;
                                  animation-name: none;
                                "
                                  >
                                    Web Design
                                  </h4>
                                  <h2
                                    class="wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.5s"
                                    style="
                                  visibility: hidden;
                                  animation-duration: 0.8s;
                                  animation-delay: 0.5s;
                                  animation-name: none;
                                "
                                  >
                                    Wrap
                                  </h2>
                                  <span
                                    class="wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.6s"
                                    style="
                                  visibility: hidden;
                                  animation-duration: 0.8s;
                                  animation-delay: 0.6s;
                                  animation-name: none;
                                "
                                  >
                                    Design &amp; Development
                                  </span>
                                  <p
                                    class="wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.7s"
                                    style="
                                  visibility: hidden;
                                  animation-duration: 0.8s;
                                  animation-delay: 0.7s;
                                  animation-name: none;
                                "
                                  >
                                    Stamp is a clean and elegant Multipurpose
                                    Landing Page Template. It will fit perfectly
                                    for Startup, Web App or any type of Web
                                    Services. It has 4 background styles with 6
                                    homepage styles. 6 pre-defined color scheme.
                                    All variations are organized separately so
                                    you can use / customize the template very
                                    easily.
                                  </p>
                                  <a
                                    href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html"
                                    class="btn btn-fill wow fadeInUp"
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.7s"
                                    style="
                                  visibility: hidden;
                                  animation-duration: 0.8s;
                                  animation-delay: 0.7s;
                                  animation-name: none;
                                "
                                  >
                                    View Details
                                  </a>
                                  <div
                                    class="
                                  mh-testimonial mh-project-testimonial
                                  wow
                                  fadeInUp
                                  owl-carousel
                                  owl-theme
                                  owl-responsive-1170
                                  owl-loaded
                                "
                                    data-wow-duration="0.8s"
                                    data-wow-delay="0.9s"
                                    style="
                                  visibility: hidden;
                                  animation-duration: 0.8s;
                                  animation-delay: 0.9s;
                                  animation-name: none;
                                "
                                  >
                                    <div class="owl-stage-outer">
                                      <div
                                        class="owl-stage"
                                        style="
                                      transform: translate3d(-866px, 0px, 0px);
                                      transition: all 0s ease 0s;
                                      width: 3031px;
                                    "
                                      >
                                        <div class="owl-item cloned cs_style4">
                                          <blockquote>
                                            <q>
                                              Creative Template - suits my needs
                                              perfectly whilst allowing me to
                                              learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                        <div class="owl-item cloned cs_style4">
                                          <blockquote>
                                            <q>
                                              Organize Code - suits my needs
                                              perfectly whilst allowing me to
                                              learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                        <div class="owl-item active cs_style4">
                                          <blockquote>
                                            <q>
                                              Excellent Template - suits my
                                              needs perfectly whilst allowing me
                                              to learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                        <div class="owl-item cs_style4">
                                          <blockquote>
                                            <q>
                                              Creative Template - suits my needs
                                              perfectly whilst allowing me to
                                              learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                        <div class="owl-item cs_style4">
                                          <blockquote>
                                            <q>
                                              Organize Code - suits my needs
                                              perfectly whilst allowing me to
                                              learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                        <div class="owl-item cloned cs_style4">
                                          <blockquote>
                                            <q>
                                              Excellent Template - suits my
                                              needs perfectly whilst allowing me
                                              to learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                        <div class="owl-item cloned cs_style4">
                                          <blockquote>
                                            <q>
                                              Creative Template - suits my needs
                                              perfectly whilst allowing me to
                                              learn some new technology first
                                              hand.
                                            </q>
                                            <cite>- Shane Kavanagh</cite>
                                          </blockquote>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="owl-controls">
                                      <div class="owl-nav">
                                        <div
                                          class="owl-prev"
                                          style={{ display: "none" }}
                                        >
                                          prev
                                        </div>
                                        <div
                                          class="owl-next"
                                          style={{ display: "none" }}
                                        >
                                          next
                                        </div>
                                      </div>
                                      <div
                                        class="owl-dots"
                                        style={{ display: "none" }}
                                        s
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="owl-controls">
                      <div class="owl-nav">
                        <div class="owl-prev" style="">
                          <i class="fa fa-angle-left"></i>
                        </div>
                        <div class="owl-next" style="">
                          <i class="fa fa-angle-right"></i>
                        </div>
                      </div>
                      <div class="owl-dots" style={{ display: "none" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End: .row --> */}
            </div>
          </div>
        </section>

        {/* <!--
        ===================
           SKILLS
        ===================
        --> */}
        <section class="mh-skills" id="mh-skills">
          <div class="home-v-img">
            <div class="container">
              <div class="row section-separator">
                <div class="section-title text-center col-sm-12">
                  {/* <!--<h2>Skills</h2>--> */}
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="mh-skills-inner">
                    <div
                      class="mh-professional-skill wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.3s"
                      style="
                    visibility: hidden;
                    animation-duration: 0.8s;
                    animation-delay: 0.3s;
                    animation-name: none;
                  "
                    >
                      <h3>Technical Skills</h3>
                      <div class="each-skills">
                        <div class="candidatos">
                          <div class="parcial">
                            <div class="info">
                              <div class="nome">Javascript</div>
                              <div class="percentagem-num">86%</div>
                            </div>
                            <div class="progressBar">
                              <div class="percentagem" style="width: 86%"></div>
                            </div>
                          </div>
                        </div>
                        <div class="candidatos">
                          <div class="parcial">
                            <div class="info">
                              <div class="nome">Java</div>
                              <div class="percentagem-num">46%</div>
                            </div>
                            <div class="progressBar">
                              <div class="percentagem" style="width: 46%"></div>
                            </div>
                          </div>
                        </div>
                        <div class="candidatos">
                          <div class="parcial">
                            <div class="info">
                              <div class="nome">Python</div>
                              <div class="percentagem-num">38%</div>
                            </div>
                            <div class="progressBar">
                              <div class="percentagem" style="width: 38%"></div>
                            </div>
                          </div>
                        </div>
                        <div class="candidatos">
                          <div class="parcial">
                            <div class="info">
                              <div class="nome">PHP</div>
                              <div class="percentagem-num">17%</div>
                            </div>
                            <div class="progressBar">
                              <div class="percentagem" style="width: 17%"></div>
                            </div>
                          </div>
                        </div>

                        <div class="candidatos">
                          <div class="parcial">
                            <div class="info">
                              <div class="nome">Python</div>
                              <div class="percentagem-num">38%</div>
                            </div>
                            <div class="progressBar">
                              <div class="percentagem" style="width: 38%"></div>
                            </div>
                          </div>
                        </div>
                        <div class="candidatos">
                          <div class="parcial">
                            <div class="info">
                              <div class="nome">PHP</div>
                              <div class="percentagem-num">17%</div>
                            </div>
                            <div class="progressBar">
                              <div class="percentagem" style="width: 17%"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div
                    class="mh-professional-skills wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.5s"
                    style="
                  visibility: hidden;
                  animation-duration: 0.8s;
                  animation-delay: 0.5s;
                  animation-name: none;
                "
                  >
                    <h3>Professional Skills</h3>
                    <ul class="mh-professional-progress">
                      <li>
                        <div
                          class="mh-progress mh-progress-circle"
                          data-progress="95"
                          style="position: relative"
                        >
                          <svg viewBox="0 0 100 100">
                            <path
                              d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                              stroke="#eee"
                              stroke-width="5"
                              fill-opacity="0"
                            ></path>
                            <path
                              d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                              stroke="#555"
                              stroke-width="5"
                              fill-opacity="0"
                              style="
                            stroke-dasharray: 298.493, 298.493;
                            stroke-dashoffset: 298.493;
                          "
                            ></path>
                          </svg>
                          <p class="progressbar-text cs_style5">0</p>
                        </div>
                        <div class="pr-skill-name">Communication</div>
                      </li>
                      <li>
                        <div
                          class="mh-progress mh-progress-circle"
                          data-progress="55"
                          style="position: relative"
                        >
                          <svg viewBox="0 0 100 100">
                            <path
                              d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                              stroke="#eee"
                              stroke-width="5"
                              fill-opacity="0"
                            ></path>
                            <path
                              d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                              stroke="#555"
                              stroke-width="5"
                              fill-opacity="0"
                              style="
                            stroke-dasharray: 298.493, 298.493;
                            stroke-dashoffset: 298.493;
                          "
                            ></path>
                          </svg>
                          <p
                            class="progressbar-text"
                            style="
                          position: absolute;
                          top: 50%;
                          left: 50%;
                          padding: 0px;
                          margin: 0px;
                          transform: translate(-50%, -50%);
                          color: rgb(85, 85, 85);
                        "
                          >
                            0
                          </p>
                        </div>
                        <div class="pr-skill-name">Team Work</div>
                      </li>
                      <li>
                        <div
                          class="mh-progress mh-progress-circle"
                          data-progress="86"
                          style="position: relative"
                        >
                          <svg viewBox="0 0 100 100">
                            <path
                              d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                              stroke="#eee"
                              stroke-width="5"
                              fill-opacity="0"
                            ></path>
                            <path
                              d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                              stroke="#555"
                              stroke-width="5"
                              fill-opacity="0"
                              style="
                            stroke-dasharray: 298.493, 298.493;
                            stroke-dashoffset: 298.493;
                          "
                            ></path>
                          </svg>
                          <p
                            class="progressbar-text"
                            style="
                          position: absolute;
                          top: 50%;
                          left: 50%;
                          padding: 0px;
                          margin: 0px;
                          transform: translate(-50%, -50%);
                          color: rgb(85, 85, 85);
                        "
                          >
                            0
                          </p>
                        </div>
                        <div class="pr-skill-name">Project Management</div>
                      </li>
                      <li>
                        <div
                          class="mh-progress mh-progress-circle"
                          data-progress="60"
                          style="position: relative"
                        >
                          <svg viewBox="0 0 100 100">
                            <path
                              d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                              stroke="#eee"
                              stroke-width="5"
                              fill-opacity="0"
                            ></path>
                            <path
                              d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                              stroke="#555"
                              stroke-width="5"
                              fill-opacity="0"
                              style="
                            stroke-dasharray: 298.493, 298.493;
                            stroke-dashoffset: 298.493;
                          "
                            ></path>
                          </svg>
                          <p
                            class="progressbar-text"
                            style="
                          position: absolute;
                          top: 50%;
                          left: 50%;
                          padding: 0px;
                          margin: 0px;
                          transform: translate(-50%, -50%);
                          color: rgb(85, 85, 85);
                        "
                          >
                            0
                          </p>
                        </div>
                        <div class="pr-skill-name">Creativity</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--
        ===================
           EXPERIENCES
        ===================
        --> */}
        <section
          class="mh-experince image-bg featured-img-one"
          id="mh-experience"
        >
          <div class="img-color-overlay">
            <div class="container">
              <div class="row section-separator">
                <div class="col-sm-12 col-md-6">
                  <div class="mh-education">
                    <h3
                      class="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.2s"
                      style="
                    visibility: hidden;
                    animation-duration: 0.8s;
                    animation-delay: 0.2s;
                    animation-name: none;
                  "
                    >
                      Education
                    </h3>
                    <div class="mh-education-deatils">
                      {/* <!-- Education Institutes--> */}
                      <div
                        class="mh-education-item dark-bg wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.3s"
                        style="
                      visibility: hidden;
                      animation-duration: 0.8s;
                      animation-delay: 0.3s;
                      animation-name: none;
                    "
                      >
                        <h4>
                          Art &amp; Multimedia From
                          <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                            Oxford University
                          </a>
                        </h4>
                        <div class="mh-eduyear">2005-2008</div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                        </p>
                      </div>
                      {/* <!-- Education Institutes--> */}
                      <div
                        class="mh-education-item dark-bg wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.5s"
                        style="
                      visibility: hidden;
                      animation-duration: 0.8s;
                      animation-delay: 0.5s;
                      animation-name: none;
                    "
                      >
                        <h4>
                          Art &amp; Multimedia From
                          <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                            Oxford University
                          </a>
                        </h4>
                        <div class="mh-eduyear">2005-2008</div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                        </p>
                      </div>
                      {/* <!-- Education Institutes--> */}
                      <div
                        class="mh-education-item dark-bg wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.6s"
                        style="
                      visibility: hidden;
                      animation-duration: 0.8s;
                      animation-delay: 0.6s;
                      animation-name: none;
                    "
                      >
                        <h4>
                          Art &amp; Multimedia From
                          <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                            Oxford University
                          </a>
                        </h4>
                        <div class="mh-eduyear">2005-2008</div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using L orem Ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div class="mh-work">
                    <h3>Work Experience</h3>
                    <div class="mh-experience-deatils">
                      {/* <!-- Education Institutes--> */}
                      <div
                        class="mh-work-item dark-bg wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.4s"
                        style="
                      visibility: hidden;
                      animation-duration: 0.8s;
                      animation-delay: 0.4s;
                      animation-name: none;
                    "
                      >
                        <h4>
                          UI/UX Designer
                          <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                            IronSketch
                          </a>
                        </h4>
                        <div class="mh-eduyear">2005-2008</div>
                        <span>Responsibility :</span>
                        <ul class="work-responsibility">
                          <li>
                            <i class="fa fa-circle"></i>Validate CSS
                          </li>
                          <li>
                            <i class="fa fa-circle"></i>Project Management
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Education Institutes--> */}
                      <div
                        class="mh-work-item dark-bg wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.6s"
                        style="
                      visibility: hidden;
                      animation-duration: 0.8s;
                      animation-delay: 0.6s;
                      animation-name: none;
                    "
                      >
                        <h4>
                          Art &amp; Multimedia From
                          <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                            Oxford University
                          </a>
                        </h4>
                        <div class="mh-eduyear">2005-2008</div>
                        <span>Responsibility :</span>
                        <ul class="work-responsibility">
                          <li>
                            <i class="fa fa-circle"></i>Validate CSS
                          </li>
                          <li>
                            <i class="fa fa-circle"></i>Project Management
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Education Institutes--> */}
                      <div
                        class="mh-work-item dark-bg wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.7s"
                        style="
                      visibility: hidden;
                      animation-duration: 0.8s;
                      animation-delay: 0.7s;
                      animation-name: none;
                    "
                      >
                        <h4>
                          Art &amp; Multimedia From
                          <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                            Oxford University
                          </a>
                        </h4>
                        <div class="mh-eduyear">2005-2008</div>
                        <span>Responsibility :</span>
                        <ul class="work-responsibility">
                          <li>
                            <i class="fa fa-circle"></i>Validate CSS
                          </li>
                          <li>
                            <i class="fa fa-circle"></i>Project Management
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--
        ===================
           PORTFOLIO
        ===================
        --> */}
        <section class="mh-portfolio" id="mh-portfolio">
          <div class="container">
            <div class="row section-separator">
              <div
                class="section-title col-sm-12 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.1s"
                style="
              visibility: hidden;
              animation-duration: 0.8s;
              animation-delay: 0.1s;
              animation-name: none;
            "
              >
                <h3>Recent Portfolio</h3>
              </div>
              <div class="part col-sm-12">
                <div class="portfolio-nav col-sm-12" id="filter-button">
                  <ul>
                    <li
                      data-filter="*"
                      class="current wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.1s"
                      style="
                    visibility: hidden;
                    animation-duration: 0.8s;
                    animation-delay: 0.1s;
                    animation-name: none;
                  "
                    >
                      <span>All Categories</span>
                    </li>
                    <li
                      data-filter=".user-interface"
                      class="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.2s"
                      style="
                    visibility: hidden;
                    animation-duration: 0.8s;
                    animation-delay: 0.2s;
                    animation-name: none;
                  "
                    >
                      <span>Web Design</span>
                    </li>
                    <li
                      data-filter=".branding"
                      class="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.3s"
                      style="
                    visibility: hidden;
                    animation-duration: 0.8s;
                    animation-delay: 0.3s;
                    animation-name: none;
                  "
                    >
                      <span>Branding</span>
                    </li>
                    <li
                      data-filter=".mockup"
                      class="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.4s"
                      style="
                    visibility: hidden;
                    animation-duration: 0.8s;
                    animation-delay: 0.4s;
                    animation-name: none;
                  "
                    >
                      <span>Mockups</span>
                    </li>
                    <li
                      data-filter=".ui"
                      class="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.5s"
                      style="
                    visibility: hidden;
                    animation-duration: 0.8s;
                    animation-delay: 0.5s;
                    animation-name: none;
                  "
                    >
                      <span>Photography</span>
                    </li>
                  </ul>
                </div>
                <div
                  class="mh-project-gallery col-sm-12 wow fadeInUp"
                  id="project-gallery"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.5s"
                  style="
                visibility: hidden;
                animation-duration: 0.8s;
                animation-delay: 0.5s;
                animation-name: none;
              "
                >
                  <div
                    class="portfolioContainer row"
                    style="position: relative; height: 986.984px"
                  >
                    <div
                      class="grid-item col-md-4 col-sm-6 col-xs-12 user-interface"
                      style="position: absolute; left: 0px; top: 0px"
                    >
                      <figure>
                        <img src="/images/g1.jpg" alt="img04" />
                        <figcaption class="fig-caption">
                          <i class="fa fa-search"></i>
                          <h5 class="title">Creative Design</h5>
                          <span class="sub-title">Photograpy</span>
                          <a data-fancybox="" data-src="#mh"></a>
                        </figcaption>
                      </figure>
                    </div>
                    <div
                      class="grid-item col-md-4 col-sm-6 col-xs-12 ui mockup"
                      style="position: absolute; left: 370px; top: 0px"
                    >
                      <figure>
                        <img src="/images/g2.png" alt="img04" />
                        <figcaption class="fig-caption">
                          <i class="fa fa-search"></i>
                          <h5 class="title">Creative Design</h5>
                          <span class="sub-title">Photograpy</span>
                          <a
                            href="/images/g2.png"
                            data-fancybox=""
                            data-src="#mh"
                          ></a>
                        </figcaption>
                      </figure>
                    </div>
                    <div
                      class="grid-item col-md-4 col-sm-6 col-xs-12 user-interface"
                      style="position: absolute; left: 740px; top: 0px"
                    >
                      <figure>
                        <img src="/images/g3.png" alt="img04" />
                        <figcaption class="fig-caption">
                          <i class="fa fa-search"></i>
                          <h5 class="title">Creative Design</h5>
                          <span class="sub-title">Photograpy</span>
                          <a
                            href="/images/g3.png"
                            data-fancybox=""
                            data-src="#mh"
                          ></a>
                        </figcaption>
                      </figure>
                    </div>
                    <div
                      class="grid-item col-md-4 col-sm-6 col-xs-12 branding"
                      style="position: absolute; left: 370px; top: 261px"
                    >
                      <figure>
                        <img src="/images/g5.png" alt="img04" />
                        <figcaption class="fig-caption">
                          <i class="fa fa-search"></i>
                          <h5 class="title">Creative Design</h5>
                          <span class="sub-title">Photograpy</span>
                          <a
                            href="/images/g5.png"
                            data-fancybox=""
                            data-src="#mh"
                          ></a>
                        </figcaption>
                      </figure>
                    </div>
                    <div
                      class="grid-item col-md-4 col-sm-6 col-xs-12 user-interface"
                      style="position: absolute; left: 0px; top: 376px"
                    >
                      <figure>
                        <img src="/images/g4.png" alt="img04" />
                        <figcaption class="fig-caption">
                          <i class="fa fa-search"></i>
                          <h5 class="title">Creative Design</h5>
                          <span class="sub-title">Photograpy</span>
                          <a
                            href="/images/g4.png"
                            data-fancybox=""
                            data-src="#mh"
                          ></a>
                        </figcaption>
                      </figure>
                    </div>
                    <div
                      class="grid-item col-md-4 col-sm-6 col-xs-12 branding"
                      style="position: absolute; left: 740px; top: 408px"
                    >
                      <figure>
                        <img src="/images/g6.png" alt="img04" />
                        <figcaption class="fig-caption">
                          <i class="fa fa-search"></i>
                          <h5 class="title">Creative Design</h5>
                          <span class="sub-title">Photograpy</span>
                          <a
                            href="/images/g6.png"
                            data-fancybox=""
                            data-src="#mh"
                          ></a>
                        </figcaption>
                      </figure>
                    </div>
                    <div
                      class="grid-item col-md-4 col-sm-6 col-xs-12 branding"
                      style="position: absolute; left: 370px; top: 522px"
                    >
                      <figure>
                        <img src="/images/g8.png" alt="img04" />
                        <figcaption class="fig-caption">
                          <i class="fa fa-search"></i>
                          <h5 class="title">Creative Design</h5>
                          <span class="sub-title">Photograpy</span>
                          <a
                            href="/images/g8.png"
                            data-fancybox=""
                            data-src="#mh"
                          ></a>
                        </figcaption>
                      </figure>
                    </div>
                    <div
                      class="grid-item col-md-4 col-sm-6 col-xs-12 ui"
                      style="position: absolute; left: 0px; top: 638px"
                    >
                      <figure>
                        <img src="/images/g9.png" alt="img04" />
                        <figcaption class="fig-caption">
                          <i class="fa fa-search"></i>
                          <h5 class="title">Creative Design</h5>
                          <span class="sub-title">Photograpy</span>
                          <a
                            href="/images/g9.png"
                            data-fancybox=""
                            data-src="#mh"
                          ></a>
                        </figcaption>
                      </figure>
                    </div>
                    <div
                      class="grid-item col-md-4 col-sm-6 col-xs-12 branding"
                      style="position: absolute; left: 740px; top: 669px"
                    >
                      <figure>
                        <img src="/images/g7.jpg" alt="img04" />
                        <figcaption class="fig-caption">
                          <i class="fa fa-search"></i>
                          <h5 class="title">Creative Design</h5>
                          <span class="sub-title">Photograpy</span>
                          <a href="/images/g7.jpg" data-fancybox="gallery"></a>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  {/* <!-- End: .grid .project-gallery --> */}
                </div>
                {/* <!-- End: .grid .project-gallery --> */}
              </div>
              {/* <!-- End: .part --> */}
            </div>
            {/* <!-- End: .row --> */}
          </div>
          <div class="mh-portfolio-modal" id="mh">
            <div class="container">
              <div class="row mh-portfolio-modal-inner">
                <div class="col-sm-5">
                  <h2>Wrap - A campanion plugin</h2>
                  <p>
                    Wrap is a clean and elegant Multipurpose Landing Page
                    Template. It will fit perfectly for Startup, Web App or any
                    type of Web Services. It has 4 background styles with 6
                    homepage styles. 6 pre-defined color scheme. All variations
                    are organized separately so you can use / customize the
                    template very easily.
                  </p>

                  <p>
                    It is a clean and elegant Multipurpose Landing Page
                    Template. It will fit perfectly for Startup, Web App or any
                    type of Web Services. It has 4 background styles with 6
                    homepage styles. 6 pre-defined color scheme. All variations
                    are organized separately so you can use / customize the
                    template very easily.
                  </p>
                  <div class="mh-about-tag">
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
                        <span>React</span>
                      </li>
                      <li>
                        <span>Javascript</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html"
                    class="btn btn-fill"
                  >
                    Live Demo
                  </a>
                </div>
                <div class="col-sm-7">
                  <div class="mh-portfolio-modal-img">
                    <img src="/images/pr-0.jif" alt="" class="img-fluid" />
                    <p>
                      All variations are organized separately so you can use /
                      customize the template very easily.
                    </p>
                    <img src="/images/pr-1.jif" alt="" class="img-fluid" />
                    <p>
                      All variations are organized separately so you can use /
                      customize the template very easily.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--
        ===================
           QUATES
        ===================
        --> */}
        <section class="mh-quates image-bg home-2-img">
          <div class="img-color-overlay">
            <div class="container">
              <div class="row section-separator">
                <div class="each-quates col-sm-12 col-md-6">
                  <h3
                    class="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.2s"
                    style="
                  visibility: hidden;
                  animation-duration: 0.8s;
                  animation-delay: 0.2s;
                  animation-name: none;
                "
                  >
                    Interested to Work?
                  </h3>
                  <p
                    class="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.4s"
                    style="
                  visibility: hidden;
                  animation-duration: 0.8s;
                  animation-delay: 0.4s;
                  animation-name: none;
                "
                  >
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat. Mirum est notare quam littera
                    gothica. quam nunc putamus parum claram,
                  </p>
                  <a
                    href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html#mh-contact"
                    class="btn btn-fill wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.5s"
                    style="
                  visibility: hidden;
                  animation-duration: 0.8s;
                  animation-delay: 0.5s;
                  animation-name: none;
                "
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--
        ===================
           PRICING
        ===================
        --> */}
        <section class="mh-pricing" id="mh-pricing">
          <div class="">
            <div class="container">
              <div class="row section-separator">
                <div
                  class="col-sm-12 section-title wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                  style="
                visibility: hidden;
                animation-duration: 0.8s;
                animation-delay: 0.2s;
                animation-name: none;
              "
                >
                  <h3>Pricing Table</h3>
                </div>
                <div class="col-sm-12 col-md-4">
                  <div
                    class="mh-pricing dark-bg shadow-2 wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s"
                    style="
                  visibility: hidden;
                  animation-duration: 0.8s;
                  animation-delay: 0.3s;
                  animation-name: none;
                "
                  >
                    <i class="fa fa-calendar"></i>
                    <h4>Full-time work</h4>
                    <p>I am available for full time</p>
                    <h5>$1500</h5>
                    <ul>
                      <li>Web Development</li>
                      <li>Advetising</li>
                      <li>Game Development</li>
                      <li>Music Writing</li>
                    </ul>
                    <a
                      href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html"
                      class="btn btn-fill"
                    >
                      Hire Me
                    </a>
                  </div>
                </div>
                <div class="col-sm-12 col-md-4">
                  <div
                    class="mh-pricing dark-bg shadow-2 wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.5s"
                    style="
                  visibility: hidden;
                  animation-duration: 0.8s;
                  animation-delay: 0.5s;
                  animation-name: none;
                "
                  >
                    <i class="fa fa-file"></i>
                    <h4>Fixed Price Project</h4>
                    <p>I am available for fixed roles</p>
                    <h5>$500</h5>
                    <ul>
                      <li>Web Development</li>
                      <li>Advetising</li>
                      <li>Game Development</li>
                      <li>Music Writing</li>
                    </ul>
                    <a
                      href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html"
                      class="btn btn-fill"
                    >
                      Hire Me
                    </a>
                  </div>
                </div>
                <div class="col-sm-12 col-md-4">
                  <div
                    class="mh-pricing dark-bg shadow-2 wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.7s"
                    style="
                  visibility: hidden;
                  animation-duration: 0.8s;
                  animation-delay: 0.7s;
                  animation-name: none;
                "
                  >
                    <i class="fa fa-hourglass"></i>
                    <h4>Hourley work</h4>
                    <p>I am available for Hourley projets</p>
                    <h5>$50</h5>
                    <ul>
                      <li>Web Development</li>
                      <li>Advetising</li>
                      <li>Game Development</li>
                      <li>Music Writing</li>
                    </ul>
                    <a
                      href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html"
                      class="btn btn-fill"
                    >
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--
        ===================
           BLOG
        ===================
        --> */}
        <section class="mh-blog image-bg featured-img-two" id="mh-blog">
          <div class="img-color-overlay">
            <div class="container">
              <div class="row section-separator">
                <div
                  class="col-sm-12 section-title wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                  style="
                visibility: hidden;
                animation-duration: 0.8s;
                animation-delay: 0.2s;
                animation-name: none;
              "
                >
                  <h3>Featured Posts</h3>
                </div>
                <div class="col-sm-12 col-md-4">
                  <div
                    class="mh-blog-item dark-bg wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s"
                    style="
                  visibility: hidden;
                  animation-duration: 0.8s;
                  animation-delay: 0.3s;
                  animation-name: none;
                "
                  >
                    <img src="/images/b-3.png" alt="" class="img-fluid" />
                    <div class="blog-inner">
                      <h2>
                        <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/blog-single.html">
                          A life without the daily traffic jams
                        </a>
                      </h2>
                      <div class="mh-blog-post-info">
                        <ul>
                          <li>
                            <strong>Post On</strong>
                            <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                              24.11.19
                            </a>
                          </li>
                          <li>
                            <strong>By</strong>
                            <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                              ThemeSpiders
                            </a>
                          </li>
                        </ul>
                      </div>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout
                      </p>
                      <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/blog-single.html">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-4">
                  <div
                    class="mh-blog-item dark-bg wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.5s"
                    style="
                  visibility: hidden;
                  animation-duration: 0.8s;
                  animation-delay: 0.5s;
                  animation-name: none;
                "
                  >
                    <img src="/images/b-2.png" alt="" class="img-fluid" />
                    <div class="blog-inner">
                      <h2>
                        <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/blog-single.html">
                          Proportion are what’s really needed
                        </a>
                      </h2>
                      <div class="mh-blog-post-info">
                        <ul>
                          <li>
                            <strong>Post On</strong>
                            <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                              24.11.19
                            </a>
                          </li>
                          <li>
                            <strong>By</strong>
                            <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                              ThemeSpiders
                            </a>
                          </li>
                        </ul>
                      </div>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout
                      </p>
                      <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/blog-single.html">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-4">
                  <div
                    class="mh-blog-item dark-bg wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.7s"
                    style="
                  visibility: hidden;
                  animation-duration: 0.8s;
                  animation-delay: 0.7s;
                  animation-name: none;
                "
                  >
                    <img src="/images/b-1.png" alt="" class="img-fluid" />
                    <div class="blog-inner">
                      <h2>
                        <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/blog-single.html">
                          Mounts of paper work to remember the way
                        </a>
                      </h2>
                      <div class="mh-blog-post-info">
                        <ul>
                          <li>
                            <strong>Post On</strong>
                            <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                              24.11.19
                            </a>
                          </li>
                          <li>
                            <strong>By</strong>
                            <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                              ThemeSpiders
                            </a>
                          </li>
                        </ul>
                      </div>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout
                      </p>
                      <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/blog-single.html">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--
        ===================
           Testimonial
        ===================
        --> */}
        <section class="mh-testimonial" id="mh-testimonial">
          <div class="home-v-img">
            <div class="container">
              <div class="row section-separator">
                <div
                  class="col-sm-12 section-title wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                  style="
                visibility: hidden;
                animation-duration: 0.8s;
                animation-delay: 0.2s;
                animation-name: none;
              "
                >
                  <h3>Client Reviews</h3>
                </div>
                <div
                  class="
                col-sm-12
                wow
                fadeInUp
                owl-carousel owl-theme owl-responsive-1170 owl-loaded
              "
                  id="mh-client-review"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.3s"
                  style="
                visibility: hidden;
                animation-duration: 0.8s;
                animation-delay: 0.3s;
                animation-name: none;
              "
                >
                  <div class="owl-stage-outer">
                    <div
                      class="owl-stage"
                      style="
                    transform: translate3d(0px, 0px, 0px);
                    transition: all 0s ease 0s;
                    width: 2220px;
                  "
                    >
                      <div
                        class="owl-item active"
                        style="width: 370px; margin-right: 0px"
                      >
                        <div class="each-client-item">
                          <div class="mh-client-item dark-bg black-shadow-1">
                            <img
                              src="/images/c-1.png"
                              alt=""
                              class="img-fluid"
                            />
                            <p>
                              Absolute wonderful ! I am completely blown
                              away.The very best.I was amazed at the quality
                            </p>
                            <h4>John Mike</h4>
                            <span>CEO, Author.Inc</span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item active"
                        style="width: 370px; margin-right: 0px"
                      >
                        <div class="each-client-item">
                          <div class="mh-client-item dark-bg black-shadow-1">
                            <img
                              src="/images/c-1.png"
                              alt=""
                              class="img-fluid"
                            />
                            <p>
                              Absolute wonderful ! I am completely blown
                              away.The very best.I was amazed at the quality
                            </p>
                            <h4>John Mike</h4>
                            <span>CEO, Author.Inc</span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item active"
                        style="width: 370px; margin-right: 0px"
                      >
                        <div class="each-client-item">
                          <div class="mh-client-item dark-bg black-shadow-1">
                            <img
                              src="/images/c-1.png"
                              alt=""
                              class="img-fluid"
                            />
                            <p>
                              Absolute wonderful ! I am completely blown
                              away.The very best.I was amazed at the quality
                            </p>
                            <h4>John Mike</h4>
                            <span>CEO, Author.Inc</span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item"
                        style="width: 370px; margin-right: 0px"
                      >
                        <div class="each-client-item">
                          <div class="mh-client-item dark-bg black-shadow-1">
                            <img
                              src="/images/c-1.png"
                              alt=""
                              class="img-fluid"
                            />
                            <p>
                              Absolute wonderful ! I am completely blown
                              away.The very best.I was amazed at the quality
                            </p>
                            <h4>John Mike</h4>
                            <span>CEO, Author.Inc</span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item"
                        style="width: 370px; margin-right: 0px"
                      >
                        <div class="each-client-item">
                          <div class="mh-client-item dark-bg black-shadow-1">
                            <img
                              src="/images/c-1.png"
                              alt=""
                              class="img-fluid"
                            />
                            <p>
                              Absolute wonderful ! I am completely blown
                              away.The very best.I was amazed at the quality
                            </p>
                            <h4>John Mike</h4>
                            <span>CEO, Author.Inc</span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="owl-item"
                        style="width: 370px; margin-right: 0px"
                      >
                        <div class="each-client-item">
                          <div class="mh-client-item dark-bg black-shadow-1">
                            <img
                              src="/images/c-1.png"
                              alt=""
                              class="img-fluid"
                            />
                            <p>
                              Absolute wonderful ! I am completely blown
                              away.The very best.I was amazed at the quality
                            </p>
                            <h4>John Mike</h4>
                            <span>CEO, Author.Inc</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="owl-controls">
                    <div class="owl-nav">
                      <div class="owl-prev" style="">
                        prev
                      </div>
                      <div class="owl-next" style="">
                        next
                      </div>
                    </div>
                    <div class="owl-dots" style="">
                      <div class="owl-dot active">
                        <span></span>
                      </div>
                      <div class="owl-dot">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--
        ===================
           FOOTER 3
        ===================
        --> */}
        <footer class="mh-footer mh-footer-3" id="mh-contact">
          <div class="container-fluid">
            <div class="row section-separator">
              <div
                class="col-sm-12 section-title wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
                style="
              visibility: hidden;
              animation-duration: 0.8s;
              animation-delay: 0.2s;
              animation-name: none;
            "
              >
                <h3>Contact Me</h3>
              </div>
              <div class="map-image image-bg col-sm-12">
                <div class="container mt-30">
                  <div class="row">
                    <div class="col-sm-12 col-md-6 mh-footer-address">
                      <div class="col-sm-12 xs-no-padding">
                        <div
                          class="
                        mh-address-footer-item
                        dark-bg
                        shadow-1
                        media
                        wow
                        fadeInUp
                      "
                          data-wow-duration="0.8s"
                          data-wow-delay="0.2s"
                          style="
                        visibility: hidden;
                        animation-duration: 0.8s;
                        animation-delay: 0.2s;
                        animation-name: none;
                      "
                        >
                          <div class="each-icon">
                            <i class="fa fa-location-arrow"></i>
                          </div>
                          <div class="each-info media-body">
                            <h4>Address</h4>
                            <address>
                              5th Avenue, 34th floor, <br />
                              New york
                            </address>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 xs-no-padding">
                        <div
                          class="
                        mh-address-footer-item
                        media
                        dark-bg
                        shadow-1
                        wow
                        fadeInUp
                      "
                          data-wow-duration="0.8s"
                          data-wow-delay="0.4s"
                          style="
                        visibility: hidden;
                        animation-duration: 0.8s;
                        animation-delay: 0.4s;
                        animation-name: none;
                      "
                        >
                          <div class="each-icon">
                            <i class="fa fa-envelope-o"></i>
                          </div>
                          <div class="each-info media-body">
                            <h4>Email</h4>
                            <a href="mailto:yourmail@email.com">
                              yourmail@email.com
                            </a>
                            <br />
                            <a href="mailto:yourmail@email.com">
                              yourmail@email.com
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 xs-no-padding">
                        <div
                          class="
                        mh-address-footer-item
                        media
                        dark-bg
                        shadow-1
                        wow
                        fadeInUp
                      "
                          data-wow-duration="0.8s"
                          data-wow-delay="0.6s"
                          style="
                        visibility: hidden;
                        animation-duration: 0.8s;
                        animation-delay: 0.6s;
                        animation-name: none;
                      "
                        >
                          <div class="each-icon">
                            <i class="fa fa-phone"></i>
                          </div>
                          <div class="each-info media-body">
                            <h4>Phone</h4>
                            <a href="callto:(880)-8976-987">(880)-8976-987</a>
                            <br />
                            <a href="callto:(880)-8976-987">(880)-8976-987</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-sm-12 col-md-6 wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.2s"
                      style="
                    visibility: hidden;
                    animation-duration: 0.8s;
                    animation-delay: 0.2s;
                    animation-name: none;
                  "
                    >
                      <form
                        id="contactForm"
                        class="single-form quate-form wow fadeInUp"
                        data-toggle="validator"
                        novalidate="true"
                        style="visibility: hidden; animation-name: none"
                      >
                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                        <div class="row">
                          <div class="col-sm-12">
                            <input
                              name="name"
                              class="contact-name form-control"
                              id="name"
                              type="text"
                              placeholder="First Name"
                              required=""
                            />
                          </div>

                          <div class="col-sm-12">
                            <input
                              name="name"
                              class="contact-email form-control"
                              id="L_name"
                              type="text"
                              placeholder="Last Name"
                              required=""
                            />
                          </div>

                          <div class="col-sm-12">
                            <input
                              name="name"
                              class="contact-subject form-control"
                              id="email"
                              type="email"
                              placeholder="Your Email"
                              required=""
                            />
                          </div>

                          <div class="col-sm-12">
                            <textarea
                              class="contact-message"
                              id="message"
                              rows="6"
                              placeholder="Your Message"
                              required=""
                            ></textarea>
                          </div>

                          {/* <!-- Subject Button --> */}
                          <div class="btn-form col-sm-12">
                            <button
                              type="submit"
                              class="btn btn-fill btn-block disabled"
                              id="form-submit"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      class="col-sm-12 mh-copyright wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.2s"
                      style="
                    visibility: hidden;
                    animation-duration: 0.8s;
                    animation-delay: 0.2s;
                    animation-name: none;
                  "
                    >
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="text-left text-xs-center">
                            <p>All right reserved Siful Islam @ 2018</p>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <ul class="social-icon">
                            <li>
                              <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                                <i class="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                                <i class="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                                <i class="fa fa-github"></i>
                              </a>
                            </li>
                            <li>
                              <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html">
                                <i class="fa fa-dribbble"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* <!--
    ==============
    * JS Files *
    ==============
    --> */}

        {/* <!-- jQuery first, then Popper.js, then Bootstrap JS --> */}

        {/* <!-- jQuery --> */}
        <script src="/js/jquery.min.js"></script>
        {/* <!-- popper --> */}
        <script src="/js/popper.min.js"></script>
        {/* <!-- bootstrap --> */}
        <script src="/js/bootstrap.min.js"></script>
        {/* <!-- owl carousel --> */}
        <script src="/js/owl.carousel.js"></script>
        {/* <!-- validator --> */}
        <script src="/js/validator.min.js"></script>
        {/* <!-- wow --> */}
        <script src="/js/wow.min.js"></script>
        {/* <!-- mixin js--> */}
        <script src="/js/jquery.mixitup.min.js"></script>
        {/* <!-- circle progress--> */}
        <script src="/js/circle-progress.js"></script>
        {/* <!-- jquery nav --> */}
        <script src="/js/jquery.nav.js"></script>
        {/* <!-- Fancybox js--> */}
        <script src="/js/jquery.fancybox.min.js"></script>
        {/* <!-- Map api --> */}
        <script src="/js/js"></script>
        {/* <!-- isotope js--> */}
        <script src="/js/isotope.pkgd.js"></script>
        <script src="/js/packery-mode.pkgd.js"></script>
        {/* <!-- Custom Scripts--> */}
        <script src="/js/map-init.js"></script>
        <script src="/js/custom-scripts.js"></script>

        {/* <!-- ****************
      After neccessary customization/modification, Please minify 
      JavaScript/jQuery according to http://browserdiet.com/en/ for better performance
    **************** --> */}
        {/* <!-- STYLE SWITCH STYLESHEET ONLY FOR DEMO --> */}
        <link rel="stylesheet" href="/css/demo.css" />
        <script type="text/javascript" src="/js/styleswitcher.js"></script>
        <script type="text/javascript" src="/js/demo.js"></script>
        <div class="demo-style-switch" id="switch-style">
          <a id="toggle-switcher" class="switch-button">
            <i class="fa fa-snowflake-o fa-spin"></i>
          </a>
          <div class="switched-options">
            <ul>
              <li class="mh-demo-styles">
                <h4>Style One</h4>
                <ul>
                  <li>
                    <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-one.html">
                      <img src="/images/h1w.png" alt="" class="img-fluid" />
                    </a>
                  </li>
                  <li>
                    <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-one-w.html">
                      <img src="/images/h1.png" alt="" class="img-fluid" />
                    </a>
                  </li>
                </ul>
              </li>
              <li class="mh-demo-styles">
                <h4>Style Two</h4>
                <ul>
                  <li>
                    <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-two.html">
                      <img src="/images/h2w.png" alt="" class="img-fluid" />
                    </a>
                  </li>
                  <li>
                    <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-two-w.html">
                      <img src="/images/h2.png" alt="" class="img-fluid" />
                    </a>
                  </li>
                </ul>
              </li>

              <li class="mh-demo-styles">
                <h4>RTl</h4>
                <ul>
                  <li>
                    <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-rtl.html">
                      <img src="/images/h3w.png" alt="" class="img-fluid" />
                    </a>
                  </li>
                  <li>
                    <a href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-rtl-w.html">
                      <img src="/images/h3.png" alt="" class="img-fluid" />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="config-title">Colors :</div>
            <ul class="styles">
              <li>
                <a
                  href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html#"
                  onclick="setActiveStyleSheet(&#39;blue&#39;); return false;"
                  title="Blue"
                >
                  <div class="blue"></div>
                </a>
              </li>
              <li>
                <a
                  href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html#"
                  onclick="setActiveStyleSheet(&#39;purple&#39;); return false;"
                  title="Purple"
                >
                  <div class="purple"></div>
                </a>
              </li>
              <li>
                <a
                  href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html#"
                  onclick="setActiveStyleSheet(&#39;blue-munsell&#39;); return false;"
                  title="Blue Munsell"
                >
                  <div class="blue-munsell"></div>
                </a>
              </li>
              <li>
                <a
                  href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html#"
                  onclick="setActiveStyleSheet(&#39;orange&#39;); return false;"
                  title="Orange"
                >
                  <div class="orange"></div>
                </a>
              </li>
              <li>
                <a
                  href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html#"
                  onclick="setActiveStyleSheet(&#39;slate&#39;); return false;"
                  title="Slate"
                >
                  <div class="slate"></div>
                </a>
              </li>
              <li>
                <a
                  href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html#"
                  onclick="setActiveStyleSheet(&#39;green&#39;); return false;"
                  title="Green"
                >
                  <div class="green"></div>
                </a>
              </li>
              <li>
                <a
                  href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html#"
                  onclick="setActiveStyleSheet(&#39;yellow&#39;); return false;"
                  title="Yellow"
                >
                  <div class="yellow"></div>
                </a>
              </li>
              <li>
                <a
                  href="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/home-slider.html#"
                  onclick="setActiveStyleSheet(&#39;red&#39;); return false;"
                  title="Red"
                >
                  <div class="red"></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Layout;
import React from "react";
import Head from "next/head";
import Loader from "../components/Loader";
import TopMenu from "../components/TopMenu";
import ContactForm from "../components/ContactForm";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Long Vu's Portfolio</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
        <script src="/js/common.js"></script>
        <script src="/js/util.js"></script>
      </Head>

      <Loader />
      <header
        className="black-bg mh-header mssh-fixed-nav nav-scroll mh-xs-mobile-nav"
        id="mh-header"
      >
        <div className="overlay"></div>
        <TopMenu />
      </header>
      {children}

      <footer className="mh-footer mh-footer-3" id="mh-contact">
        <div className="container-fluid">
          <ContactForm />
        </div>
      </footer>
      <script src="/js/jquery.min.js"></script>
      <script src="/js/popper.min.js"></script>
      <script src="/js/bootstrap.min.js"></script>
      <script src="/js/owl.carousel.js"></script>
      <script src="/js/validator.min.js"></script>
      <script src="/js/wow.min.js"></script>
      <script src="/js/jquery.mixitup.min.js"></script>
      <script src="/js/circle-progress.js"></script>
      <script src="/js/jquery.nav.js"></script>
      <script src="/js/jquery.fancybox.min.js"></script>
      <script src="//maps.googleapis.com/maps/api/js?v=3.exp&amp;key=AIzaSyCRP2E3BhaVKYs7BvNytBNumU0MBmjhhxc"></script>
      <script src="/js/isotope.pkgd.js"></script>
      <script src="/js/packery-mode.pkgd.js"></script>
      <script src="/js/map-init.js"></script>
      <script src="/js/custom-scripts.js"></script>
    </>
  );
};

export default Layout;

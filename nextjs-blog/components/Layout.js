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
        <title>NextJS - Assignment</title>
        <link rel="icon" href="/favicon.ico" />

        <meta charset="utf-8" />
        <meta name="description" content="" />
        <meta name="author" content="" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <link rel="stylesheet" href="/css/base.css" />
        <link rel="stylesheet" href="/css/vendor.css" />
        <link rel="stylesheet" href="/css/main.css" />

        <script src="/js/modernizr.js"></script>
        <script src="/js/pace.min.js"></script>

        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <header className="short-header">
        <div className="gradient-block"></div>

        <div className="row header-content">
          <div className="logo">
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>

          <Menu menu={menu} />

          <div className="search-wrap">
            <form role="search" method="get" className="search-form" action="#">
              <label>
                <span className="hide-content">Search for:</span>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Type Your Keywords"
                  value=""
                  name="s"
                  title="Search for:"
                  autocomplete="off"
                />
              </label>
              <input type="submit" className="search-submit" value="Search" />
            </form>

            <a href="#" id="close-search" className="close-btn">
              Close
            </a>
          </div>

          <div className="triggers">
            <a className="search-trigger" href="#">
              <i className="fa fa-search"></i>
            </a>
            <a className="menu-toggle" href="#">
              <span>Menu</span>
            </a>
          </div>
        </div>
      </header>
      {children}
      <footer>
        <div className="footer-main">
          <div className="row">
            <div className="col-four tab-full mob-full footer-info">
              <h4>About Our Site</h4>

              <p>
                Lorem ipsum Ut velit dolor Ut labore id fugiat in ut fugiat
                nostrud qui in dolore commodo eu magna Duis cillum dolor officia
                esse mollit proident Excepteur exercitation nulla. Lorem ipsum
                In reprehenderit commodo aliqua irure labore.
              </p>
            </div>

            <div className="col-two tab-1-3 mob-1-2 site-links">
              <h4>Site Links</h4>

              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="col-two tab-1-3 mob-1-2 social-links">
              <h4>Social</h4>

              <ul>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Dribbble</a>
                </li>
                <li>
                  <a href="#">Google+</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>

            <div className="col-four tab-1-3 mob-full footer-subscribe">
              <h4>Subscribe</h4>

              <p>Keep yourself updated. Subscribe to our newsletter.</p>

              <div className="subscribe-form">
                <form id="mc-form" className="group" noValidate={true}>
                  <input
                    type="email"
                    value=""
                    name="dEmail"
                    className="email"
                    id="mc-email"
                    placeholder="Type &amp; press enter"
                    required=""
                  />

                  <input type="submit" name="subscribe" />

                  <label
                    htmlFor="mc-email"
                    className="subscribe-message"
                  ></label>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-twelve">
              <div className="copyright">
                <span>© Copyright Abstract 2016</span>
                <span>
                  Design by <a href="http://www.styleshout.com/">styleshout</a>
                </span>
              </div>

              <div id="go-top">
                <a className="smoothscroll" title="Back to Top" href="#top">
                  <i className="icon icon-arrow-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <script src="/js/jquery-2.1.3.min.js"></script>
      <script src="/js/plugins.js"></script>
      <script src="/js/main.js"></script>
    </div>
  );
};

export default Layout;

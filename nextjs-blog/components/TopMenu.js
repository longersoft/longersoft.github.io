import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const TopMenu = () => {
  if (typeof window === "undefined") {
    return null;
  }
  const token = localStorage.getItem("token");

  const route = useRouter();
  const renderMenu = (menuItems) => {
    return menuItems.map((menuItem) => {
      const currentClass =
        route.asPath === menuItem.href ||
        route.route.indexOf(menuItem.href + "/") === 0
          ? "current"
          : "";
      if (menuItem?.submenu?.length > 0) {
        return (
          <li class={`has-children ${currentClass}`} key={menuItem.href}>
            <Link href={menuItem.href}>
              <a>{menuItem.label}</a>
            </Link>
            <ul className="sub-menu">{renderMenu(menuItem.submenu)}</ul>
          </li>
        );
      }
      return (
        <li className={currentClass} key={menuItem.href}>
          <Link href={menuItem.href}>
            <a>{menuItem.label}</a>
          </Link>
        </li>
      );
    });
  };

  const logout = () => {
    localStorage.setItem("token", "");
    route.push("/admin/login", undefined, { shallow: true });
  };

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

  return (
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-expand-lg mh-nav nav-btn">
          <a className="navbar-brand" href="#">
            <img
              src="/images/fedalon_logo.png"
              alt="maha"
              className="img-fluid"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-0 ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#mh-home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mh-about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mh-skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mh-experience">
                  Experiences
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mh-portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mh-pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mh-blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mh-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default TopMenu;

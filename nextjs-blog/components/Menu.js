import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Menu = ({ menu }) => {
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
            <ul class="sub-menu">{renderMenu(menuItem.submenu)}</ul>
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

  return (
    <></>
    // <nav id="main-nav-wrap">
    //   <ul class="main-navigation sf-menu">
    //     {renderMenu(menu)}
    //     {token && (
    //       <a href="#" onClick={logout}>
    //         Logout
    //       </a>
    //     )}
    //   </ul>
    // </nav>
  );
};

export default Menu;

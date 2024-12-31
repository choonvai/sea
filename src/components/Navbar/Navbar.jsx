import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.jpg";
import phone from "../../assets/phone-call.png";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "OUTBOUND",
    link: "/outbound",
  },
  {
    name: "INBOUND",
    link: "/inbound",
  },
  {
    name: "ABOUT",
    link: "/about",
  },
];

const DropdownLinks = [
  {
    name: "Telegram",
    link: "/#telegram",
  },
  {
    name: "WhatApp",
    link: "/#whatapp",
  },
  {
    name: "more",
    link: "/#more",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("bg-transparent text-white");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground("bg-white text-black"); // Set background to white and text to black
      } else {
        setNavbarBackground("bg-transparent text-white"); // Transparent background and white text
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 right-0 w-full z-50 shadow-md transition-all duration-300 ${navbarBackground}`}>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 font-bold text-2xl">
              <NavLink to="/" activeClassName="active">
              <img src={Logo} alt="" className="h-16" />
              </NavLink>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 text-xl">
                <li className="py-4">
                  <NavLink to="/outbound" activeClassName="active">
                    OUTBOUND
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/inbound" activeClassName="active">
                    INBOUND
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/news" activeClassName="active">
                    NEWS
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/about" activeClassName="active">
                    ABOUT US
                  </NavLink>
                </li>
                <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    CONTACT US {" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="flex gap-2 bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1"
                onClick={() => {
                  handleOrderPopup();
                }}
              >
                <img src={phone} className="w-6"></img>
                +855 *** *** ***
              </button>
              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;

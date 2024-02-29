import React, { useRef, useState, useEffect } from "react";
import { FaBars} from "react-icons/fa";
import logoEn from "../images/TajsserLogo.svg";
import logoAr from "../images/LogoAr.png";
import NavMotion from "./NavMotion";
import { IoMdMoon } from "react-icons/io";
import { useThemeContext } from "../context/themeContext";
import { MdOutlineWbSunny } from "react-icons/md";
import NavToggle from "./NavToggle";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();

  const { show, convert, changeLanguage, activeSection, darkMode, dispatch } =
    useThemeContext();

  const navRef = useRef();
  // const [active, setActive] = useState(false);
  const [ToTop, setToTop] = useState(true);

  const ConvertTo = (x) => {
    switch (x) {
      case "logoEn":
        return logoEn;
      case "logoAr":
        return logoAr;

      default:
        return "";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollToTop = window.scrollY;
      // console.log(scrollToTop);
      if (scrollToTop !== 0) return setToTop(false);
      else return setToTop(true);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ToTop]);

  // const showNavbar = () => {
  //   navRef.current.classList.toggle("");
  //   // setActive((p) => !p);
  // };

  const scrollToSection = (id) => {
    // showNavbar();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handelAR = (e) => {
    changeLanguage(e);
    dispatch({ type: "ENTOAR" });
  };
  const handelEN = (e) => {
    changeLanguage(e);
    dispatch({ type: "ENTOAR" });
  };

  return (
    <>
      {!show && (
        <header className={`${ToTop ? "" : "bgReplace"}`}>
          <h3>
            <img onClick={() => scrollToSection("Home")} src={ConvertTo(t("logo.logo"))} width={150} className="hover:cursor-pointer" alt="a" />
          </h3>

          <>
            <nav ref={navRef} className="1">
              <NavMotion
                delay={1}
                Name={t("nav.Home")}
                isActive={activeSection === "Home"}
                onClick={() => scrollToSection("Home")}
              />
              <NavMotion
                delay={2}
                Name={t("nav.About")}
                isActive={activeSection === "About"}
                onClick={() => scrollToSection("About")}
              />
              <NavMotion
                delay={3}
                Name={t("nav.Service")}
                isActive={activeSection === "Service"}
                onClick={() => scrollToSection("Service")}
              />
              <NavMotion
                delay={4}
                Name={t("nav.Training")}
                isActive={activeSection === "Consulting"}
                onClick={() => scrollToSection("Consulting")}
              />

              {/* <button className="nav-btn nav-close-btn" onClick={() => dispatch({ type: "NAVSHOW" })}>
                <FaTimes />
              </button>  */}
            </nav>
          </>

          <div className="gap-[10%]">
            <div className="p-2">
              {!convert && (
                <button
                  onClick={() => handelAR("ar")}
                  className="text-yellow-50 font-bold text-[80%] md:text-[100%]"
                >
                  AR
                </button>
              )}
              {convert && (
                <button
                  onClick={() => handelEN("en")}
                  className="text-yellow-50 font-bold	 text-[80%] md:text-[100%]"
                >
                  EN
                </button>
              )}
            </div>

            {!darkMode && (
              <div className="moon-icon">
                <IoMdMoon
                  onClick={() => dispatch({ type: "TOGGLE" })}
                ></IoMdMoon>
              </div>
            )}
            {darkMode && (
              <div className="sun-icon">
                <MdOutlineWbSunny
                  onClick={() => dispatch({ type: "TOGGLE" })}
                ></MdOutlineWbSunny>
              </div>
            )}
          
          <button
            className="nav-btn"
            onClick={() => dispatch({ type: "NAVSHOW" })}
          >
            <FaBars />
          </button>  
          </div>
        </header>
      )}

      {show && <NavToggle/>}
    </>
  );
};

export default NavBar;

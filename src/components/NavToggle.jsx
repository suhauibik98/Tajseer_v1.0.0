import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import NavMotion from "./NavMotion";
import { useThemeContext } from "../context/themeContext";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import logoEn from "../images/TajsserLogo.svg";
import logoAr from "../images/LogoAr.png";

const NavToggle = () => {
  const { dispatch, activeSection } = useThemeContext();
  const { t } = useTranslation();

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
  const navRef = useRef();
  const scrollToSection = (id) => {
    // showNavbar();
    dispatch({ type: "NAVSHOW" });
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header className="w-screen headerbg h-screen flex bg-black flex-col fixed  z-40  ">
        <div className="w-full z-50 relative flex justify-center items-center  ">
          <div className="w-full m-6 ">
            <img onClick={() => scrollToSection("Home")} src={ConvertTo(t("logo.logo"))} className="w-[25vw]" alt="a" />
          </div>
                 <div>
            <button
              className="text-yellow-50 text-[5vw]"
              onClick={() => dispatch({ type: "NAVSHOW" })}
            >
              <FaTimes />
            </button>
          </div>
        </div>

        <nav ref={navRef} className="responsive_nav">
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
        </nav>
        <footer className="w-screen footerToggle text-white py-8 flex justify-center items-center">
          <div className=" mx-auto flex flex-col items-center max-w-screen-lg px-4">
            <div className="w-full text-center mb-1">
              <div className="flex items-center justify-center">
                <FaLocationDot className="text-2xl md:text-3xl mr-2 md:mr-5" />
                <div>
                  <p className="font-bold text-lg sm:text-xl md:text-2xl m-3">
                    {t("footer.findus")}
                  </p>
                  <a
                    href="https://www.google.com/maps/place/%D8%AA%D8%AC%D8%B3%D9%8A%D8%B1+%D8%A7%D9%84%D9%81%D9%83%D8%B1+%D9%84%D9%84%D8%A3%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%88%D9%8A%D8%A9+%D9%88%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%D9%8A%D8%A9%D8%8C+%D8%A7%D9%84%D8%B9%D9%84%D9%8A%D8%A7%D8%8C+%D8%A7%D9%84%D8%B9%D9%84%D9%8A%D8%A7%D8%8C+Al+Olaya,+Riyadh+12222,+Saudi+Arabia%E2%80%AD/@24.694603,46.685274,16z/data=!4m2!3m1!1s0x3e2f033eb433d1d3:0xece85b9a20e77994?hl=en&gl=JO"
                    className="block"
                  >
                    {t("footer.findusdes")}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full text-center mb-1">
              <div className="flex items-center justify-center">
                <MdOutlineMail className="text-2xl md:text-3xl mr-2 md:mr-5" />
                <div>
                  <p className="font-bold text-lg sm:text-xl md:text-2xl m-3">
                  {t("footer.email")}
                  </p>
                  <p>
                    <a href="mailto:info@tajseerksa.com">info@tajseerksa.com</a>
                  </p>
                </div>
              </div>
            </div>
            <p>v 1.0.0</p>
          </div>
        </footer>
      </header>
    </>
  );
};

export default NavToggle;

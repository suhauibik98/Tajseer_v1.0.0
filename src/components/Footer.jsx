import React from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { useTranslation } from "react-i18next";


const Footer = () => {
  const {t} = useTranslation();
  return (
    <>
     <div className="w-full footer text-white py-8">
      <div className="  flex flex-col md:flex-row flex-wrap justify-center md:justify-around items-center md:items-start">
        <div className="sm:w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
          <div className="flex justify-center">
            <FaLocationDot className="text-2xl md:text-3xl mx-2 md:mx-5" />
            <div>
              <p className="font-bold text-lg sm:text-xl md:text-2xl">{t("footer.findus")}</p>
              <a href="https://www.google.com/maps/place/%D8%AA%D8%AC%D8%B3%D9%8A%D8%B1+%D8%A7%D9%84%D9%81%D9%83%D8%B1+%D9%84%D9%84%D8%A3%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%88%D9%8A%D8%A9+%D9%88%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%D9%8A%D8%A9%D8%8C+%D8%A7%D9%84%D8%B9%D9%84%D9%8A%D8%A7%D8%8C+%D8%A7%D9%84%D8%B9%D9%84%D9%8A%D8%A7%D8%8C+Al+Olaya,+Riyadh+12222,+Saudi+Arabia%E2%80%AD/@24.694603,46.685274,16z/data=!4m2!3m1!1s0x3e2f033eb433d1d3:0xece85b9a20e77994?hl=en&gl=JO" className="block">{t("footer.findusdes")}</a>
            </div>
          </div>
        </div>
        <div className="sm:w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
          <div className="flex justify-center ">
            <FaPhone className="text-2xl md:text-3xl mx-2 md:mx-5" />
            <div>
              <p className="font-bold text-lg sm:text-xl md:text-2xl">{t("footer.callus")}</p>
              <p><a href="tel:00966114621717">00966114621717</a></p>
              <p><a href="tel:00966545992326">00966545992326</a></p>
              <p><a href="tel:0096611247121">0096611247121</a></p>
            </div>
          </div>
        </div>
        <div className="sm:w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
          <div className="flex justify-center ">
            <MdOutlineMail className="text-2xl md:text-3xl mx-2 md:mx-5" />
            <div>
              <p className="font-bold text-lg sm:text-xl md:text-2xl">{t("footer.email")}</p>
              <p><a href="mailto:info@tajseerksa.com">info@tajseerksa.com</a></p>
            </div>
          </div>
        </div>
      </div>
        <p className="text-center relative top-4 text-slate-400">{t("footer.Reserved")}</p>
    </div>
    </>
  );
};

export default Footer;

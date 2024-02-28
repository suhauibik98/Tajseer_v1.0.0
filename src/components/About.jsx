import React, { useEffect, useRef, useState } from "react";
import { useInView, animated } from "@react-spring/web";
import { buildInteractionObserverThreshold } from "./threshold";
import { useTranslation } from "react-i18next";
import "react-lazy-load-image-component/src/effects/blur.css";

const About = () => {
  const [play, setPlay] = useState(0);
  const { t } = useTranslation();
  const atSrc = `https://www.youtube.com/embed/qCeML7rAjkk?rel=0&amp;amp;autoplay=${play}&amp;mute=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.renderforest.com`;
  const videoRef = useRef(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Play video when 50% of the video element is in view
    };

    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPlay(1);
          // videoRef.current.play();
        } else {
          setPlay(0); // videoRef.current?.pause();
        }
      });
    }, options);
    observer1.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer1.unobserve(videoRef.current);
      }
    };
  }, []);

  const [ref, sprong] = useInView(
    () => ({
      from: {
        opcity: 0,
        transform: " translateX(-10%)",
        transition: "0.8s linear",
      },
      to: {
        opcity: 1,
        transform: " translateX(0%)",
      },
    }),
    {
      rootMargin: "-1% 0px -4% 0px",
      amount: buildInteractionObserverThreshold(),
    }
  );
  const [ref2, sprong2] = useInView(
    () => ({
      from: {
        opcity: 0,
        transform: " translateX(10%)",
        transition: "0.8s linear",
      },
      to: {
        opcity: 1,
        transform: " translateX(0%)",
      },
    }),
    {
      rootMargin: "-1% 0px -4% 0px",
      amount: buildInteractionObserverThreshold(),
    }
  );
  const [ref1, springs1] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 80,
      },
      to: {
        opacity: 1,
        y: 0,
        zIndex: 1,
        transition: "0.3s linear",
      },
    }),
    {
      rootMargin: "-1% 0px -4% 0px",
      amount: buildInteractionObserverThreshold(),
    }
  );
  const [ref3, springs3] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 80,
      },
      to: {
        opacity: 1,
        y: 0,
        zIndex: 1,
        transition: "0.3s linear",
      },
    }),
    {
      rootMargin: "-1% 0px -4% 0px",
      amount: buildInteractionObserverThreshold(),
    }
  );
  return (
    <section id="About">
      <div className=" w-full flex flex-col justify-center items-center  pt-24 mt-6">
        <animated.div ref={ref1} style={springs1}>
          <div className="flex flex-col justify-center items-center">
            <p className="font-size-m text-left text-white  text-[20vw] ml-[2%]">
              {t("about.title")}
            </p>
            <p className="text-sm md:text-2xl text-white w-[90%] md:w-[70%] m-6">
              {t("about.description")}
            </p>
          </div>
        </animated.div>

        <div className="flex justify-evenly flex-wrap m-[4%] ">
          <animated.div
            className="card flex-wrap md:flex-nowrap"
            ref={ref}
            style={sprong}
          >
            {/* <div > */}
            {/* <img
              effect="blur"
              wrapperClassName="iconCard"
              src={img1}
              className="w-[8vw] iconCard"
              alt=""
            /> */}
            <div>
              <p className=" ml-3 font-bold   md:text-3xl">
                {t("about.mission")}
              </p>
              <p className="text-xs ml-3  md:text-xl">
                {t("about.missionDescription")}
              </p>
              {/* </div> */}
            </div>
          </animated.div>

          <animated.div
            className="card flex-wrap md:flex-nowrap"
            ref={ref2}
            style={sprong2}
          >
            {/* <div > */}
            {/* <img
              effect="blur"
              wrapperClassName="iconCard"
              className="w-[8vw] "
              src={img2}
              alt=""
            /> */}
            <div>
              <p className="  ml-3  font-bold md:text-3xl">
                {t("about.vision")}
              </p>
              <p className="text-xs ml-3  md:text-xl">
                {t("about.visionDescription")}
              </p>
              {/* </div> */}
            </div>
          </animated.div>
        </div>

        <animated.div ref={ref3} style={springs3}>
          {/* <div className=" "> */}
          <div className="w-full h-full">
            <iframe
              ref={videoRef}
              className="youtubeFram"
              src={atSrc}
              title="Social Media Marketing | Content Creation Tool"
              allowFullScreen
              data-gtm-yt-inspected-6="true"
              id="91461840"
              data-gtm-yt-inspected-30456674_89="true"
              // Adjust height as needed
            ></iframe>
          </div>
          {/* </div> */}
        </animated.div>
      </div>
    </section>
  );
};
export default About;

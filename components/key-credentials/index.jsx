"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./keyCredentials.module.css";
import Image from "next/image";
import { montserrat, poppins } from "../../fonts";
import { motion, AnimatePresence } from "framer-motion";
import mockData from "@/mock.json";
import "swiper/element/css/autoplay";
import { throttle } from "@/utils";

function KeyCredentials() {
  const swiperElRef = useRef(null);
  const [width, setWidth] = useState(null);
  const [domLoaded, setDomLoaded] = useState(false);

  const handleResize = () => {
    let w =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    setWidth(w);
  };

  useEffect(() => {
    if (typeof document === 'undefined') return
    setDomLoaded(true);
    handleResize()
    const handleResizeThrottled = throttle(handleResize, 700);
    window.addEventListener('resize', handleResizeThrottled);
    return () => {
      window.removeEventListener('resize', handleResizeThrottled);
    };
  }, []);

  const boxes = {
    hidden: { opacity: 0, x: -30, y: 10 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const gotToForm = () => {
    let position = document.getElementById("contact_us");
    position && position.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {
          domLoaded &&
          <div className={styles.first_section}>
            <swiper-container
              ref={swiperElRef}
              slides-per-view={width <= 768 ? "2" : "4"}
              space-between={width <= 768 ? "10" : "10"}
              navigation="false"
              pagination="false"
              speed="2000"
              loop="true"
              autoplay="true"
            >
              {mockData.keyCredentials.companies.map((imageData, index) => (
                <swiper-slide key={index}>
                  <motion.div
                    key={index}
                    variants={boxes}
                    className={styles.slide_item}
                  >
                    <Image
                      fill
                      src={imageData.src}
                      alt={imageData.alt}
                      style={{
                        objectFit: "contain",
                        // backgroundColor: imageData.background
                        //   ? "rgba(0, 0, 0, 0.8)"
                        //   : "transparent",
                        // padding: 5,
                        // borderRadius: 10,
                      }}
                    />
                  </motion.div>
                </swiper-slide>
              ))}
            </swiper-container>
          </div>
        }

        <div className={styles.second_section}>
          <h2 className={`${styles.head} ${montserrat.className}`}>
            {mockData.keyCredentials.title}
          </h2>

          <p className={`${styles.paragraph} ${poppins.className}`}>
            {mockData.keyCredentials.subHeading}
          </p>

          <button
            className={`${styles.btn} ${montserrat.className}`}
            onClick={gotToForm}
          >
            CONTACT US
            <Image
              src={"/images/arrow.svg"}
              alt="Arrow"
              width={10}
              height={10}
              style={{ objectFit: "contain", marginLeft: "10px" }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default KeyCredentials;

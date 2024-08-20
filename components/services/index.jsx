"use client";

import React, { useEffect, useState, useContext } from "react";
import styles from "./services.module.css";
import { montserrat, poppins, inter } from "../../fonts";
import mockData from "@/mock.json";
import Image from "next/image";
import { motion } from "framer-motion";
import { CommonContext } from "@/context/commonContext";
import { throttle } from "@/utils";

function Services() {
  const { serviceItem, updateServiceItem } = useContext(CommonContext)
  const [selectedService, setSelectedService] = useState(serviceItem ?? 0);
  const [width, setWidth] = useState(null);

  const handleResize = () => {
    let w =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    setWidth(w);
  };

  useEffect(() => {
    if (typeof document === 'undefined') return
    handleResize()
    const handleResizeThrottled = throttle(handleResize, 700);
    window.addEventListener('resize', handleResizeThrottled);
    return () => {
      window.removeEventListener('resize', handleResizeThrottled);
    };

  }, []);

  useEffect(() => {
    setSelectedService(serviceItem)
  }, [serviceItem])

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const boxes = {
    hidden: { opacity: 0, x: 30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const showDesc = () => {
    return (
      <motion.div className={styles.box_description} id={"description_ref"}>
        <div>
          <span className={`${styles.services_head2} ${inter.className}`}>
            {mockData.services.includedServices[selectedService].heading}
          </span>
          <div style={{ marginTop: "10px" }}>
            <span className={`${styles.services_desc2} ${poppins.className}`}>
              {mockData.services.includedServices[selectedService].description2}
            </span>
            <div
              style={{
                flexDirection: "column",
                display: "flex",
                alignItems: "self-start",
              }}
            >
              {mockData.services.includedServices[selectedService].points.map(
                (point) => (
                  <span
                    key={point}
                    className={`${styles.services_desc2} ${poppins.className}`}
                  >
                    &#8226; {point}
                  </span>
                )
              )}
            </div>
          </div>
          {/* <div
            style={{
              flexDirection: "column",
              display: "flex",
              alignItems: "self-start",
            }}
          >
            {mockData.services.includedServices[selectedService].points.map(
              (point) => (
                <span
                  key={point}
                  className={`${styles.services_desc2} ${poppins.className}`}
                >
                  &#8226; {point}
                </span>
              )
            )}
          </div> */}
        </div>
      </motion.div>
    );
  };
  return (
    <section id="services" className={styles.container}>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <motion.div
          initial={{ width: "0%", opacity: 0 }}
          whileInView={{ width: "80px", opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.line}
        ></motion.div>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className={`${styles.span} ${montserrat.className}`}
        >
          Our Services
        </motion.span>
        <motion.div
          initial={{ width: "0%", opacity: 0 }}
          whileInView={{ width: "100px", opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.line}
        ></motion.div>
      </div>

      <h2 className={`${styles.heading} ${montserrat.className}`}>
        {mockData.services.heading}
      </h2>
      <p className={`${styles.paragraph} ${poppins.className}`}>
        {mockData.services.subHeading}
      </p>
      <div className={styles.services_container}>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className={styles.box_container}
        >
          {mockData.services.includedServices.map((serviceItem, key) => {
            return (
              <div>
                <motion.div
                  variants={boxes}
                  key={key}
                  className={`${styles.item}`}
                  onClick={() => {
                    if (width <= 768) {
                      let position = document.getElementById("description_ref");
                      position &&
                        position.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }
                    updateServiceItem(key)
                    setSelectedService(key);
                  }}
                >
                  <div className={styles.description_container}>
                    <div className={styles.services_heading_container}>
                      <span
                        className={`${styles.services_head} ${inter.className}`}
                      >
                        {serviceItem.heading}
                      </span>
                      <span
                        className={`${styles.services_desc} ${poppins.className}`}
                      >
                        {serviceItem.description}
                      </span>
                    </div>

                    {width > 768 &&
                      (key === selectedService && styles.item_active ? (
                        <Image
                          src={"/images/arrow-right.svg"}
                          alt="person-placing-coin"
                          width={40}
                          height={40}
                          style={{ objectFit: "contain" }}
                        />
                      ) : (
                        <div style={{ width: 40, height: 40 }} />
                      ))}
                  </div>
                </motion.div>
                {width && width < 768 && key === selectedService && showDesc()}
              </div>
            );
          })}
        </motion.div>
        {width && width >= 768 && showDesc()}
      </div>

      {/* <button
        className={`${styles.btn} ${montserrat.className}`}
        onClick={() => {
          router.push("/services");
        }}
      >
        READ MORE
        <Image
          src={"/images/arrow2.svg"}
          alt="Read more"
          width={10}
          height={10}
          style={{ objectFit: "contain", marginLeft: "10px" }}
        />
      </button> */}
    </section>
  );
}

export default Services;

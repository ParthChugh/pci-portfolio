import React from "react";
import styles from "./choose_us.module.css";
import Image from "next/image";
import { montserrat, poppins, abhaya_libreh } from "../../fonts";
import { motion } from "framer-motion";
import mockData from "@/mock.json";

function Idea() {
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
        duration: 0.5,
      },
    },
  };

  const openUpWork=()=>{
    window.open("https://www.upwork.com/freelancers/abhishekjasuja?mp_source=share","_blank")
  }
  return (
    <section className={styles.wrapper}>
      <div className={styles.bg_overlay}>
        <Image
          src={"/images/background-overlay.png"}
          alt="about-us"
          width={350}
          height={300}
          className={styles.img}
        />
      </div>

      <div className={styles.section_one}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className={`${styles.span} ${montserrat.className}`}
          >
            Why choose us?
          </motion.span>
          <motion.div
            initial={{ width: "0%", opacity: 0 }}
            whileInView={{ width: "100px", opacity: 1 }}
            transition={{ duration: 1 }}
            className={styles.line}
          ></motion.div>
        </div>

        <h1 className={`${styles.heading} ${montserrat.className}`}>
          {mockData.whyChooseUs.title1}
          <br /> {mockData.whyChooseUs.title2}
        </h1>

        <ul className={`${styles.paragraph} ${poppins.className}`}>
          <li>
            <p>
              <u>Industry experts</u>: {mockData.whyChooseUs.description1}
            </p>
          </li>

          <li>
            <p>
              <u>Customized solutions</u>: {mockData.whyChooseUs.description2}
            </p>
          </li>

          <li>
            <p>
              <u>Reliable and Trustworthy</u>: {mockData.whyChooseUs.description3}
            </p>
          </li>
          <li>
            <p>
              <u>Knowledge sharing and guidance</u>: {mockData.whyChooseUs.description4}
            </p>
          </li>
        </ul>

        <motion.div
          variants={variants}
          className={styles.count_wrapper}
          initial="hidden"
          whileInView="show"
        >
          {Object.keys(mockData.whyChooseUs.data).map((data) => (
            <motion.div variants={boxes} className={styles.count_items}>
              <span className={`${styles.number} ${abhaya_libreh.className}`}>
                {mockData.whyChooseUs.data[data]}
              </span>
              <span className={`${styles.label} ${poppins.className}`}>
                {data}
              </span>
            </motion.div>
          ))}

          <motion.div variants={boxes} className={styles.count_items}>
            <span className={`${styles.number} ${abhaya_libreh.className}`}>
              100%
            </span>
            <span className={`${styles.label} ${poppins.className}`}>
              Job Success
            </span>
          </motion.div>

          <motion.div variants={boxes} className={styles.count_items}>
            <span className={`${styles.number} ${abhaya_libreh.className}`}>
              5
            </span>
            <span className={`${styles.label} ${poppins.className}`}>
              Star Rated
            </span>
          </motion.div>

          <motion.div onClick={openUpWork} variants={boxes} className={styles.count_items}>
              <Image
                src={"/images/upworkroundedsquare.svg"}
                alt="upwork"
                width={50}
                height={40}
              />
            <span className={`${styles.label} ${poppins.className}`}>
              Visit Upwork
            </span>
          </motion.div>
        </motion.div>
      </div>
      <div className={styles.section_two}>
        <div className={styles.image_wrapper}>
          <div className={`${styles.img_box} ${styles.img_box1}`}>
            <Image
              src={"/images/business-people-discussing.png"}
              alt="about-us"
              width={200}
              height={300}
              className={styles.choose_us_img}
              loading="lazy"
            />
          </div>
          <div className={`${styles.img_box} ${styles.img_box2}`}>
            <Image
              src={"/images/business-finance-man.png"}
              alt="about-us"
              width={200}
              height={300}
              className={styles.choose_us_img}
              loading="lazy"
            />
          </div>
          <div className={`${styles.img_box} ${styles.img_box3}`}>
            <Image
              src={"/images/hands-writing.png"}
              alt="about-us"
              width={200}
              height={300}
              className={styles.choose_us_img}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Idea;

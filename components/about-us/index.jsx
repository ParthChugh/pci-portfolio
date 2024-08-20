import React from 'react'
import styles from './aboutUs.module.css'
import { montserrat, poppins } from '../../fonts'
import Image from 'next/image'
import { motion } from 'framer-motion'
import mockData from '@/mock.json'

function AboutUs() {

  const gotToForm = () => {
    let position = document.getElementById('contact_us');
    position && position.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const startConversation = () => {
    const phoneNumber = "+919873150658"; // move to .env
    const url = "https://wa.me/" + phoneNumber;
    window.open(url, '_blank')
  };

  return (
    <section id='about_us' className={styles.wrapper}>
      <div className={styles.container1}>
        <div className={styles.first_section}>
          <div className={styles.img_wrapper}>
            <Image
              src={'/images/aboutus.jpg'}
              alt='Financial Advisory Services'
              width={400}
              height={500}
              className={styles.img}
            />

            <div className={styles.crowd_funding}>
              <Image
                src={'/images/crowd-funding.png'}
                alt='crowd-funding'
                width={200}
                height={200}
                className={styles.img_crowd_funding}
              />
            </div>

            <div className={styles.bluebox}>
              <Image
                src={'/images/background-overlay.png'}
                alt='about-us'
                fill
                className={styles.img_bluebox}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_section}>

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              // viewport={{ once: true }}
              className={`${styles.span} ${montserrat.className}`}
            >
              About us
            </motion.span>

            <motion.div
              initial={{ width: '0%', opacity: 0 }}
              whileInView={{ width: '100px', opacity: 1 }}
              transition={{ duration: 1 }}
              // viewport={{ once: true }}
              className={styles.line}
            ></motion.div>
          </div>

          <h3
            className={`${styles.head} ${montserrat.className}`}>
            {mockData.aboutUs.title}
          </h3>

          <motion.p
            initial={{ opacity: 0.2, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, }}
            className={`${styles.paragraph} ${poppins.className}`}>
            {mockData.aboutUs.subHeading1}
            <br /><br />
            {mockData.aboutUs.subHeading2}
            <br /><br />
            {mockData.aboutUs.subHeading3}
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
            <motion.button
              initial={{ scale: 0.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`${styles.btn} ${montserrat.className}`}
              onClick={gotToForm}
            >
              CONTACT US
              <Image
                src={'/images/arrow.svg'}
                alt='Contact us'
                width={10}
                height={10}
                style={{ objectFit: 'contain', marginLeft: '10px' }}
              />
            </motion.button>


            <motion.button
              initial={{ scale: 0.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`${styles.btn2} ${montserrat.className}`}
              onClick={startConversation}
            >
              START A CONVERSATION
            </motion.button>

          </div>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.left}>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={`${styles.head_sec} ${montserrat.className}`}
          >
            The story of X-F1
          </motion.h2>
        </div>

        <div className={styles.right}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={`${styles.paragraph}`}
            style={{ marginTop: '0px' }}
          >
            {mockData.aboutUs.about}
            <br /><br />
            {mockData.aboutUs.aboutX}
            <br /><br />
            {mockData.aboutUs.aboutF1}
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
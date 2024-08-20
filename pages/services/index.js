import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from './services.module.css'
import Image from "next/image";
import { montserrat, inter, poppins } from '../fonts'
import { motion } from 'framer-motion';
import mockData from '@/mock.json'

function OurTeam() {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }
  const boxes = {
    hidden: { opacity: 0, x: 30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7
      }
    }
  }
  return (
    <section>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.head_section}>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className={`${styles.head} ${montserrat.className}`}
          >
            Our Services
          </motion.h1>
        </div>

        <div className={styles.content_section}>

          <motion.div
            variants={variants}
            initial='hidden'
            whileInView='show'
            className={styles.box_container}
          >
            {
              mockData.services.includedServices.map((serviceItem, key) => {
                return (
                  <motion.div variants={boxes} key={key} className={styles.item}>
                    <div className={styles.description_container}>
                      <div className={styles.heading_container}>
                        <div className={styles.img_wrapper}>
                          <Image
                            src={`/images/${serviceItem.imageName}`}
                            alt='person-placing-coin'
                            width={40}
                            height={40}
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                        <span className={`${styles.services_head} ${inter.className}`}>{serviceItem.heading}</span>
                      </div>

                      <span className={`${styles.services_desc} ${poppins.className}`}>{serviceItem.description2}</span>
                      <div
                        style={{
                          flexDirection: "column",
                          display: "flex",
                          alignItems: "self-start",
                          marginTop: 10
                        }}
                      >
                        {serviceItem.points.map(
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

                  </motion.div>
                )
              })
            }
          </motion.div>

        </div>
      </div>
      <Footer />
    </section>
  )
}

export default OurTeam
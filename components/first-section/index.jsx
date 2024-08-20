import styles from './firstSection.module.css'
import { montserrat, poppins } from '../../fonts'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import mockData from '@/mock.json'

function HomeSection() {
  const gotToForm = () => {
    let position = document.getElementById('contact_us');
    position && position.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <section
      id='home'
      className={styles.wrapper}
    >
      <div className={styles.bg_overlay}>
        <Image
          src={'/images/background-overlay.png'}
          alt='about-us'
          width={350}
          height={300}
          className={styles.img}
        />
      </div>

      <div className={styles.section_one}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className={`${styles.span} ${montserrat.className}`}
          >
            {mockData.title}
          </motion.span>

          <motion.div
            initial={{ width: '0%', opacity: 0 }}
            whileInView={{ width: '100px', opacity: 1 }}
            transition={{ duration: 1 }}
            className={styles.line}
          ></motion.div>
        </div>

        <TypeAnimation
          style={{ whiteSpace: 'pre-line' }}
          sequence={[
            mockData.subtitle,
            1000,
          ]}
          speed={60}
          cursor={false}
          repeat={0}
          className={`${styles.heading} ${montserrat.className}`}
        />

        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className={`${styles.heading_mobile} ${montserrat.className}`}>
          {mockData.subtitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className={`${styles.paragraph} ${poppins.className}`}
        >
          {mockData.subHeading}
        </motion.p>


        <motion.button
          className={`${styles.btn} ${montserrat.className}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          onClick={gotToForm}
        >
          CONTACT US
          <Image
            src={'/images/arrowwhite.svg'}
            alt='Contact us'
            width={10}
            height={10}
            style={{ objectFit: 'contain', marginLeft: '10px' }}
          />
        </motion.button>

      </div>
      <div className={styles.section_two}>
        <motion.div
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          transition={{ duration: .7 }}
          className={styles.imgWrapper}>
          <Image
            src={'/images/homepage_small_img.jpg'}
            alt='financial Advisory '
            width={350}
            height={300}
            className={styles.grassImage}
          />
          <div className={styles.box}>
            <p className={poppins.className}>
              {mockData.feedback.message}
            </p>
            <div className={styles.user_wrapper}>
              <div className={styles.user_photo}>
                <Image
                  src={'/images/testimonial/ryan_alder.jpeg'}
                  alt='user'
                  width={40}
                  height={40}
                  className={styles.userimg}
                />
              </div>
              <div className={styles.user_info}>
                <span className={`${styles.name} ${montserrat.className}`}>{mockData.feedback.name}</span>
                <span className={`${styles.details} ${poppins.className}`}>{mockData.feedback.title}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeSection
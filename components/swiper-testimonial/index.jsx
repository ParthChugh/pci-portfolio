import { useRef, useEffect, useState } from 'react';
import styles from './swiper.module.css'
import { motion } from 'framer-motion'
import { montserrat, poppins } from '../../fonts'
import { register } from 'swiper/element/bundle';
import Image from 'next/image';
import mockData from '@/mock.json'

register();

function Testimonial() {
  const swiperElRef = useRef(null);
  const [width, setWidth] = useState(null)
  useEffect(() => {
    if (typeof window === 'undefined') return
    let w = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
    setWidth(w)
  }, [])

  const handleMouseEnter = () => {
    swiperElRef?.current?.swiper?.autoplay?.stop()
  };

  const handleMouseLeave = () => {
    swiperElRef?.current?.swiper?.autoplay?.start()
  }

  if (!width) return null
  return (
    <section className={styles.wrapper}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <motion.div
          initial={{ width: '0%', opacity: 0 }}
          whileInView={{ width: '100px', opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.line}
        ></motion.div>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className={`${styles.span} ${montserrat.className}`}>
          Testimonial
        </motion.span>
        <motion.div
          initial={{ width: '0%', opacity: 0 }}
          whileInView={{ width: '100px', opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.line}
        ></motion.div>
      </div>

      <h2 className={`${styles.heading} ${montserrat.className}`}>
        {mockData.testimonial.title}
      </h2>


      <div className={styles.swiper_wrapper}
        style={{ background: 'white', marginTop: '10px' }}
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      >
        <swiper-container
          ref={swiperElRef}
          autoHeight="true"
          slides-per-view={"1"}
          navigation="false"
          pagination="false"
          speed="6000"
          loop="true"
          autoplay="true"
          scrollbar="true"
          pauseOnMouseEnter="true"
        >
          {
            mockData.testimonial.data.map((val, ky) => {
              return (
                <swiper-slide key={ky}>
                  <div className={styles.slide_item}>
                    <div className={styles.item_box}>
                      <p className={`${styles.paragraph} ${poppins.className}`}>{val.content}</p>

                      <div className={styles.user_wrapper}>
                        <div className={styles.user_photo}>
                          <Image
                            src={`/images/${val.imageName}`}
                            alt={val.name}
                            width={40}
                            height={40}
                            className={styles.userimg}
                          />
                        </div>
                        <div className={styles.user_info}>
                          <span className={`${styles.name} ${montserrat.className}`}>{val.name}</span>
                          <span className={`${styles.details} ${poppins.className}`}>{val.designation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              )
            })
          }
        </swiper-container>
      </div>

    </section >
  )
}

export default Testimonial
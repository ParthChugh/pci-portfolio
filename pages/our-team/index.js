import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from './ourTeam.module.css'
import Image from "next/image";
import { montserrat } from '@/fonts'
import { motion } from 'framer-motion';
import mockData from '@/mock.json'

function OurTeam() {
  const fadeInVariants = {
    initial: { y: -20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 1 },
  };
  return (
    <section className={styles.main_container_wrapper}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.head_section}>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className={`${styles.head} ${montserrat.className}`}
          >
            Our Team
          </motion.h1>
        </div>

        <div className={styles.content_section}>

          <div className={styles.image_wrapper}>
            {mockData.ourTeam.teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                className={styles.main_container}
              >
                <div className={styles.container}>
                  <Image
                    src={member.imageSrc}
                    width={170}
                    height={170}
                    alt="team member"
                    className={styles.image}
                    style={{borderRadius: "10px"}}
                  />
                  {/* <div className={styles.person_details}>
                    <span className={`${styles.name} ${abhaya_libreh.className}`}>
                      {member.name}
                    </span>
                    <span className={`${styles.role} ${poppins.className}`}>
                      {member.role}
                    </span>
                  </div> */}
                </div>
                <div className={styles.single_section}>
                  <div className={styles.linkedin_container}>
                    <h1 className={`${styles.sec_head} ${montserrat.className}`}>{member.name}</h1>
                    <Image
                      src={"/images/linkedin_header.svg"}
                      alt="linkedin"
                      width={25}
                      height={25}
                      className={styles.linkedin_icon}
                      onClick={() => {
                        window.open(member.linkedin, "_blank");
                      }}
                    />
                  </div>
                  <h5 className={`${styles.sec_subhead} ${montserrat.className}`}>{member.role}</h5>
                  {member.about.map((data, indexAbout) =>
                    <p className={`${styles.sec_content} ${montserrat.className}`} key={`${data}-${indexAbout}`}>
                      {data}
                    </p>
                  )}

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default OurTeam
import React from "react";
import styles from "./team.module.css";
import Image from "next/image";
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { montserrat, poppins, abhaya_libreh } from "../../fonts";
import { motion } from "framer-motion";
import mockData from "@/mock.json";

function Team() {
  const router = useRouter();
  const fadeInVariants = {
    initial: { y: -20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 1 },
  };
  return (
    <section className={styles.wrapper} id="our_team">
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
          Our &nbsp; Team
        </motion.span>
        <motion.div
          initial={{ width: "0%", opacity: 0 }}
          whileInView={{ width: "80px", opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.line}
        ></motion.div>
      </div>

      <h1 className={`${styles.heading} ${montserrat.className}`}>
        {mockData.ourTeam.title1} <br /> {mockData.ourTeam.title2}
      </h1>

      <p className={`${styles.paragrapgh} ${poppins.className}`}>
        {mockData.ourTeam.subHeading}
      </p>
      <div className={styles.image_wrapper}>
        {mockData.ourTeam.teamMembers.slice(0, 2).map((member, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            className={styles.main_container}
          >
            <Link
              className={styles.container}
              target="_blank"
              href={member.linkedin}
            >
              <Image
                src={"/images/linkedin_header.svg"}
                alt="linkedin"
                width={25}
                height={25}
                className={styles.linkedin_icon}
              />
              <Image
                src={member.imageSrc.replace('.png', '_square.png')}
                width={member.width}
                height={member.height}
                alt="team member"
                className={styles.image}
              />
              <div 
                className={styles.person_details} 
              >
                <span className={`${styles.name} ${abhaya_libreh.className}`}>
                  {member.name}
                </span>
                <span className={`${styles.role} ${poppins.className}`}>
                  {member.role}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <button
        className={`${styles.btn} ${montserrat.className}`}
        onClick={() => {
          router.push("/our-team");
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
      </button>
    </section>
  );
}

export default Team;

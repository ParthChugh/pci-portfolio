import React, { useContext } from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { montserrat, poppins, inter } from "../../fonts";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import mockData from "@/mock.json";
import { CommonContext } from "@/context/commonContext";

function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const { updateServiceItem } = useContext(CommonContext)

  const scrollHandle = (id, serviceItem) => {
    if (pathname === "/") {
      let position = document.getElementById(id);
      if(serviceItem){
        updateServiceItem(parseInt(serviceItem))
      }
      position &&
        position.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push("/");
      setTimeout(() => {
        let position = document.getElementById(id);
        if(serviceItem){
          updateServiceItem(serviceItem)
        }
        position &&
          position.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  };


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

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.first_sec}>
          <div className={styles.logo_wrapper}>
            <Image
              src={"/images/white_logo.png"}
              alt="x-f1"
              width={100}
              height={45}
              className={styles.logo}
            />
          </div>

          <p className={`${styles.paragraph} ${poppins.className}`}>
            {mockData.footer.subHeading}
          </p>

          <div style={{ display: "flex", marginTop: "15px" }}>
            <Link
              className={styles.linkdin_btn}
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? ""}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={"/images/linkedin.svg"}
                alt="linkedin"
                width={70}
                height={25}
                style={{ objectFit: "fill" }}
              />
            </Link>
            <button
              // href={process.env.NEXT_PUBLIC_CALENDLY_LINK ?? ""}
              // rel="noopener noreferrer"
              // target="_blank"
              className={`${styles.btn} ${montserrat.className}`}
              onClick={() => scrollHandle("contact_us")}
            >
              CONTACT US
              <Image
                src={"/images/arrow2.svg"}
                alt="arrow"
                width={10}
                height={10}
                style={{ objectFit: "contain", marginLeft: "10px" }}
              />
            </button>
          </div>
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className={styles.second_sec}
        >
          <motion.div variants={boxes} className={styles.column}>
            <span className={`${styles.columnHead} ${inter.className}`}>
              Company
            </span>
            <div className={styles.elements}>
              <span
                onClick={() => scrollHandle("home")}
                className={`${styles.footer_items} ${inter.className}`}
              >
                Home
              </span>
              <span
                onClick={() => scrollHandle("about_us")}
                className={`${styles.footer_items} ${inter.className}`}
              >
                About Us
              </span>
              <span
                onClick={() => scrollHandle("services", "0")}
                className={`${styles.footer_items} ${inter.className}`}
              >
                Services
              </span>
              <span
                onClick={() => scrollHandle("our_team")}
                className={`${styles.footer_items} ${inter.className}`}
              >
                Our Team
              </span>
              <span
                onClick={() => scrollHandle("contact_us")}
                className={`${styles.footer_items} ${inter.className}`}
              >
                Contact
              </span>
            </div>
          </motion.div>
          <motion.div variants={boxes} className={styles.column}>
            <span className={`${styles.columnHead} ${inter.className}`}>
              Services
            </span>
            <div className={styles.elements}>
              <span
                className={`${styles.footer_items} ${inter.className}`}
                onClick={() => scrollHandle("services", '0')}
              >
                Financial Modelling
              </span>
              <span
                className={`${styles.footer_items} ${inter.className}`}
                onClick={() => scrollHandle("services", '1')}
              >
                Valuation Advisory
              </span>
              <span
                className={`${styles.footer_items} ${inter.className}`}
                onClick={() => scrollHandle("services", '2')}
              >
                Virtual CFO
              </span>
              <span
                className={`${styles.footer_items} ${inter.className}`}
                onClick={() => scrollHandle("services", '3')}
              >
                Model Audit
              </span>
            </div>
          </motion.div>
          <motion.div variants={boxes} className={styles.column}>
            <span className={`${styles.columnHead} ${inter.className}`}>
              Legal
            </span>
            <div className={styles.elements}>
              <span className={`${styles.footer_items} ${inter.className}`}>
                <Link href={"privacy-policy"}>Privacy Policy</Link>
              </span>
              <span className={`${styles.footer_items} ${inter.className}`}>
                <Link href={"terms-of-use"}>Terms & Conditions</Link>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <div
        style={{ width: "100%" }}
        className={`${styles.copy_right} ${poppins.className}`}
      >
        Copyright © {new Date().getFullYear()} X-F1
      </div>
    </>
  );
}

export default Footer;

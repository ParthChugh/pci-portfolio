import React from 'react'
import styles from './appointment.module.css'
import { montserrat, poppins } from '../../fonts'
import { motion } from 'framer-motion'
import mockData from '@/mock.json'

const Appointment = () => {

    const startConversation = () => {
        const phoneNumber = "+919873150658";  // move to .env
        const url = "https://wa.me/" + phoneNumber;
        window.open(url, '_blank')
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.item_wrapper}>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className={styles.first_section}
                >
                    <p className={`${styles.paragrapgh} ${poppins.className}`}>
                        {mockData.appointment.subHeading1}
                        <br />  <br />
                        {mockData.appointment.subHeading2}
                    </p>
                </motion.div>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .7 }}
                    className={styles.second_section}>
                    <span className={`${styles.span} ${montserrat.className}`}>APPOINTMENT</span>
                    <h2 className={`${styles.head} ${montserrat.className}`}>Meet the faces that make X-F1 your Trusted Partner</h2>

                    <button 
                        className={`${styles.btn} ${montserrat.className}`} 
                        // href={process.env.NEXT_PUBLIC_CALENDLY_LINK ?? ""}
                        // rel="noopener noreferrer" 
                        // target="_blank"
                        onClick={startConversation}
                    >
                        START A CONVERSATION
                    </button>

                </motion.div>
            </div>
        </section>
    )
}

export default Appointment
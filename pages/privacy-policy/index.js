import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from './privacyPolicy.module.css'
import { montserrat } from '@/fonts'
import { motion } from 'framer-motion';

function PrivacyPolicy() {
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
            Privacy Policy
          </motion.h1>
        </div>

        <div className={styles.content_section}>

          <div className={styles.single_section}>
            <h1 className={`${styles.sec_head} ${montserrat.className}`}>1. INTRODUCTION</h1>
            <p className={`${styles.sec_content} ${montserrat.className}`}>
              These Terms of Use (the “Terms”) tell you the terms on which you may make use of: <br />
              • our website http://X-F1 <br />
              • ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed and the contents and services available through them, as updated or added to from time to time.

            </p>
          </div>

          <div className={styles.single_section}>
            <h1 className={`${styles.sec_head} ${montserrat.className}`}>2. YOUR PRIVACY</h1>
            <p className={`${styles.sec_content} ${montserrat.className}`}>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
              graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
              century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in
              a type specimen book. It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </p>
          </div>

          <div className={styles.single_section}>
            <h1 className={`${styles.sec_head} ${montserrat.className}`}>3. ADDITIONAL TERMS FOR SPECIFIC SERVICES</h1>
            <p className={`${styles.sec_content} ${montserrat.className}`}>
              In addition, the services set out below will be governed by the following terms of
              use and privacy policies: The purpose of lorem ipsum is to create a natural
              looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.
              <br />
              A practice not without controversy, laying out pages with meaningless filler text can be very useful
              when the focus is meant to be on design, not content. The passage experienced a surge in
              popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again
              during the 90s as desktop publishers bundled the text with their software.
            </p>
          </div>

          <div className={styles.single_section}>
            <h1 className={`${styles.sec_head} ${montserrat.className}`}>4. YOUR RIGHT TO USE THE SERVICE</h1>
            <p className={`${styles.sec_content} ${montserrat.className}`}>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
              graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
              century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in
              a type specimen book. It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </p>
          </div>

          <div className={styles.single_section}>
            <h1 className={`${styles.sec_head} ${montserrat.className}`}>5. TERMINATION OF YOUR RIGHT TO USE THE SERVICE</h1>
            <p className={`${styles.sec_content} ${montserrat.className}`}>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
              graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
              century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in
              a type specimen book. It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </p>
          </div>

          <div className={styles.single_section}>
            <h1 className={`${styles.sec_head} ${montserrat.className}`}>6. X-F1 ACCOUNT</h1>
            <p className={`${styles.sec_content} ${montserrat.className}`}>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
              graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
              century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in
              a type specimen book. It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </p>
          </div>

          <div className={styles.single_section}>
            <h1 className={`${styles.sec_head} ${montserrat.className}`}>7. EARNING X-F1</h1>
            <p className={`${styles.sec_content} ${montserrat.className}`}>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
              graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
              century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in
              a type specimen book. It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </p>
          </div>

          <div className={styles.single_section}>
            <h1 className={`${styles.sec_head} ${montserrat.className}`}>8. X-F1 MARKETPLACE</h1>
            <p className={`${styles.sec_content} ${montserrat.className}`}>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
              graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
              century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in
              a type specimen book. It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </p>
          </div>

        </div>
      </div>
      <Footer />
    </section>
  )
}

export default PrivacyPolicy
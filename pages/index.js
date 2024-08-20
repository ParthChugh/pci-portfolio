import Header from '@/components/header'
import HomeSection from '@/components/first-section/index'
import AboutUs from '@/components/about-us'
import ChooseUs from '@/components/choose-us'
import Services from '@/components/services'
import KeyCredentials from '@/components/key-credentials'
import Testimonial from '@/components/swiper-testimonial'
import Appointment from '@/components/appointment'
import Footer from '@/components/footer'
import Team from '@/components/team'
import ContactForm from '@/components/contcat-form'
import styles from '../styles/page.module.css'
import Image from 'next/image'

export default function Home() {

  const sctollToTop = (id) => {
    let position = document.getElementById(id);
    position && position.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className={styles.container}>
      <Header />
      <HomeSection />
      <AboutUs />
      <ChooseUs />
      <Services />
      <KeyCredentials />
      <Testimonial />
      <Appointment />
      <Team />
      <ContactForm />
      <Footer />

      <div className={styles.scroll_to_top} onClick={() => sctollToTop('header')}>
        <Image
          src={'/images/up.png'}
          alt='up-arrow'
          width={15}
          height={15}
          className={styles.up_arrow}
        />
      </div>
    </div>
  )
}

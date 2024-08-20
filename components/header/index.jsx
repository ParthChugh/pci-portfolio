import { useState } from 'react'
import styles from './header.module.css'
import { montserrat } from '../../fonts'
import { motion } from "framer-motion";
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

function Header() {
    const router = useRouter();
    const pathname = usePathname();

    const [show, setShow] = useState(false)

    const scrollHandle = (id) => {
        if (pathname === '/') {
            let position = document.getElementById(id);
            position && position.scrollIntoView({ behavior: "smooth", block: "start" });
            setShow(false)
        }
        else {
            setShow(false)
            router.push('/')
            setTimeout(() => {
                let position = document.getElementById(id);
                position && position.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 500);
        }
    }

    const startConversation = () => {
        const phoneNumber = "+919873150658";  // move to .env
        const url = "https://wa.me/" + phoneNumber;
        window.open(url, '_blank')
    };

    return (
        <motion.div
            className={styles.header_wrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            id='header'
        >
            <div className={styles.firstSection}>
                <Image
                    src={'/images/logo_black.svg'}
                    alt='x-f1'
                    width={100}
                    height={40}
                    className={styles.logo_image}
                    onClick={() => router.push('/')}
                />
            </div>

            <div className={show ? `${styles.menu} ${styles.menu_show}` : `${styles.menu}`}>
                <ul className={styles.list_wrapper}>
                    <li className={styles.links} onClick={() => scrollHandle('home')}>
                        HOME
                    </li>
                    <li className={styles.links} onClick={() => scrollHandle('about_us')}>
                        ABOUT US
                    </li>
                    <li className={styles.links} onClick={() => scrollHandle('services')}>
                        SERVICES
                    </li>
                    <li className={styles.links} onClick={() => scrollHandle('our_team')}>
                        OUR TEAM
                    </li>
                    <li className={styles.links} onClick={() => scrollHandle('contact_us')}>
                        CONTACT US
                    </li>
                </ul>
            </div>

            <div className={styles.lastSection}>
                <button onClick={() => startConversation()} className={`${styles.btn} ${montserrat.className}`}>Let’s Talk!</button>
                <Link 
                    href={process.env.NEXT_PUBLIC_LINKEDIN_URL ?? ""}
                    rel="noopener noreferrer" 
                    target="_blank"
                >
                    <Image
                        src={'/images/linkedin_header.svg'}
                        alt='linkedin'
                        width={25}
                        height={25}
                        className={styles.linkedin_icon}
                    />
                </Link>
                

                <div className={show ? `${styles.menu_icon} ${styles.menu_icon_open}` : `${styles.menu_icon}`} onClick={() => { setShow((pre) => !pre) }}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>

            </div>
        </motion.div>
    )
}

export default Header
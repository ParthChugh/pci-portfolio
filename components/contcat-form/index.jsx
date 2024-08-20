import React, { useState } from 'react'
import styles from './contactForm.module.css'
import Image from 'next/image'
import { montserrat, poppins } from '../../fonts'
import { motion } from 'framer-motion'
import mockData from '@/mock.json';
import countryList from "@/country.json";

function ContactForm() {
    const [serviceErr, setServiceErr] = useState(false)
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
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7
            }
        }
    }

    const submitForm = async (e) => {
        e.preventDefault()
        const form = document.getElementById("myForm");
        let formData = new FormData(form);
        let financial_modelling = formData.get('financial_modelling');
        let virtual_cfo = formData.get('virtual_cfo');
        let valuation_advisory = formData.get('valuation_advisory');
        let model_audit = formData.get('model_audit');
        let other_services = formData.get('other_services');
        if(![financial_modelling,virtual_cfo,valuation_advisory,model_audit,other_services].includes('on')){
            setServiceErr(true)
            return
        }
        setServiceErr(false)
        try {
            const options = {
                method: 'POST',
                body: formData,
                // headers: {
                //     'Content-Type': 'application/x-www-form-urlencoded',
                // },
            };
            fetch(form.action, options)
                .then(function (response) {
                    // Check if request was successful
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(function (data) {
                    alert('Successfully Submitted')
                    form.reset();
                })
                .catch(function (error) {
                    console.error('There has been a problem with your fetch operation:', error.message);
                });
        }
        catch {

        }
    }
    return (
        <section className={styles.wrapper} id='contact_us'>
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
                        Contact Us?
                    </motion.span>
                    <motion.div
                        initial={{ width: '0%', opacity: 0 }}
                        whileInView={{ width: '100px', opacity: 1 }}
                        transition={{ duration: 1 }}
                        className={styles.line}
                    ></motion.div>
                </div>

                <h1 className={`${styles.heading} ${montserrat.className}`}>
                    {mockData.contact.title}
                </h1>
                <p className={`${styles.paragraph} ${poppins.className}`}>
                    {mockData.contact.description}
                </p>

                <motion.div
                    variants={variants}
                    initial='hidden'
                    whileInView='show'
                    className={styles.contact_methods}
                >
                    <motion.div variants={boxes} className={styles.method_wrapper}>
                        <div className={styles.method_image}>
                            <Image
                                src={'/images/call.svg'}
                                alt='call'
                                width={20}
                                height={20}
                                className={styles.img_contact}
                            />
                        </div>
                        <div className={styles.method_details}>
                            <span className={`${styles.contact_head} ${montserrat.className}`}>Contact</span>
                            <span className={`${styles.contact_value} ${poppins.className}`}>{mockData.contact.phone}</span>
                        </div>
                    </motion.div>
                    <motion.div variants={boxes} className={styles.method_wrapper}>
                        <div className={styles.method_image}>
                            <Image
                                src={'/images/envelope.svg'}
                                alt='email'
                                width={20}
                                height={20}
                                className={styles.img_contact}
                            />
                        </div>
                        <div className={styles.method_details}>
                            <span className={`${styles.contact_head} ${montserrat.className}`}>Email</span>
                            <span className={`${styles.contact_value} ${poppins.className}`}>
                                <a href={`mailto:${mockData.whyChooseUs.email}`}>{mockData.contact.email}</a>
                            </span>
                        </div>
                    </motion.div>
                    <motion.div variants={boxes} className={styles.method_wrapper}>
                        <div className={styles.method_image}>
                            <Image
                                src={'/images/location.svg'}
                                alt='location'
                                width={20}
                                height={20}
                                className={styles.img_contact}
                            />
                        </div>
                        <div className={styles.method_details}>
                            <span className={`${styles.contact_head} ${montserrat.className}`}>Address</span>
                            <span className={`${styles.contact_value_address} ${poppins.className}`}>
                                {mockData.contact.address}
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <div className={styles.section_two}>
                <form
                    className={styles.form_wrapper}
                    action={process.env.NEXT_PUBLIC_CONTACT_US_FORM_SUBMIT}
                    method="POST"
                    target="_blank"
                    onSubmit={submitForm}
                    id='myForm'
                >
                    <div className={styles.input_wrapper}>
                        <label className={`${styles.label} ${montserrat.className}`}>*Full Name</label>
                        <input
                            type='text'
                            placeholder='Enter Full Name'
                            className={`${styles.input} ${montserrat.className}`}
                            name='full_name'
                            required
                        />
                    </div>

                    <div className={styles.companyContryWrapper}>
                        <div className={styles.input_wrapper}>
                            <label className={`${styles.label} ${montserrat.className}`}>*Company</label>
                            <input
                                type='text'
                                placeholder='Enter Company Name'
                                className={`${styles.input} ${montserrat.className}`}
                                name='company'
                            />
                        </div>
                        <div className={styles.input_wrapper}>
                            <label className={`${styles.label} ${montserrat.className}`}>Country</label>
                            <select
                                style={{ width: '100%' }}
                                type='select'
                                placeholder='Select Country'
                                className={`${styles.input} ${montserrat.className}`}
                                name='country'
                            >
                                {
                                    countryList.map((country) => {
                                        return <option key={country.Code} value={country.Name}>{country.Name}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <div className={styles.input_wrapper}>
                        <label className={`${styles.label} ${montserrat.className}`}>*Email</label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            className={`${styles.input} ${montserrat.className}`}
                            name='email'
                            required
                        />
                    </div>
                    <div className={styles.input_wrapper}>
                        <label className={`${styles.label} ${montserrat.className}`}>Website</label>
                        <input
                            type='url'
                            placeholder='Enter Website link'
                            className={`${styles.input} ${montserrat.className}`}
                            name='url'
                        />
                    </div>

                    <div className={styles.input_wrapper}>
                        <lable className={`${styles.label} ${montserrat.className}`}>Services* {serviceErr && <span style={{color:'red'}}>Atleast one option is required</span>}</lable>
                        <div className={styles.chekbox_wrapper}>
                            <div>
                                <input name='financial_modelling' id='financial_modelling' type='checkbox'></input>
                                <label for="financial_modelling" style={{ paddingBottom: '0px' }} className={`${styles.label} ${montserrat.className}`}>Financial Modelling</label>
                            </div>
                            <div>
                                <input name='virtual_cfo' id='virtual_cfo' type='checkbox' ></input>
                                <label for='virtual_cfo' style={{ paddingBottom: '0px' }} className={`${styles.label} ${montserrat.className}`}>Virtual CFO</label>
                            </div>
                            <div>
                                <input name='valuation_advisory' id='valuation_advisory' type='checkbox' ></input>
                                <label for='valuation_advisory' style={{ paddingBottom: '0px' }} className={`${styles.label} ${montserrat.className}`}>Valuation Advisory</label>
                            </div>
                            <div>
                                <input name='model_audit' id='model_audit' type='checkbox' ></input>
                                <label for='model_audit' style={{ paddingBottom: '0px' }} className={`${styles.label} ${montserrat.className}`}>Model Audit</label>
                            </div>
                            <div>
                                <input name='other_services' id='other_services' type='checkbox' ></input>
                                <label for='other_services' style={{ paddingBottom: '0px' }} className={`${styles.label} ${montserrat.className}`}>Other Service</label>
                            </div>
                        </div>

                    </div>

                    <div className={styles.input_wrapper}>
                        <label className={`${styles.label} ${montserrat.className}`}>*Message</label>
                        <textarea
                            rows="4"
                            placeholder='Describe your requirement'
                            className={`${styles.input_area} ${montserrat.className}`}
                            name='message'
                            required
                        />
                    </div>

                    <div className={styles.btnWrapper}>
                        <button type='submit' className={`${styles.btn} ${montserrat.className}`}>Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactForm
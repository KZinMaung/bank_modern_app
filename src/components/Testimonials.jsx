import React from 'react'
import styles from '../style';
import { feedback } from '../constants';
import FeedbackCard from './FeedbackCard';

const Testimonials = () =>(
  <section id="testimonials" className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>

    <div className='w-[60%] h-[60%] rounded-full blue__gradient absolute bottom-40 -right-[50%] z-[1]'/>

    <div className='flex flex-col md:flex-row items-center justify-between relative z-[0]'>
      <h2 className={styles.heading2}>
      What people are 
      <br className='hidden sm:block'/>
      saying about us
      </h2>
      <div className='w-full mt-6 md:mt-0'>
        <p className={styles.paragraph}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
    </div>
    <div className='flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[0]'>
      {
        feedback.map((fb) => (
          <FeedbackCard key={fb.id} {...fb}/>
        ))
      }
    </div>

    
    <div>

    </div>
  </section>
);

export default Testimonials
import React from 'react'
import Button from './Button';
import styles from '../style';

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} bg-black-gradient rounded-[20px] flex-col sm:flex-row box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={`${styles.heading2}`}>Let's try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>
    <div className={`mt-10 sm:mt-0 sm:ml-10 ml-0 ${styles.flexCenter}`}>
      <Button/>
    </div>
  </section>
);

export default CTA
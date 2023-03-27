import React from 'react';
import { card } from '../assets';
import styles,{layout}  from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h1 className={styles.heading2}>
      Find a better card deal
      <br className='hidden sm:block'/> in few easy steps.
      </h1>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
       Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-10"/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className='w-[100%] h-[100%]'/> 
    </div>
  </section>
);

export default CardDeal
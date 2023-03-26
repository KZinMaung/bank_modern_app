import React from 'react'
import styles from '../style';
import { arrowUp } from '../assets';
const GetStarted = () => (
  <div className={`w-[140px] h-[140px] bg-blue-gradient p-[2px] rounded-full cursor-pointer`}>
    <div className={`bg-primary w-[100%] h-[100%] ${styles.flexCenter} flex-col rounded-full cursor-pointer`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23.4px] text-gradient'>Get</p>
        <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain'/>
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23.4px] text-gradient'>Started</p>
    </div>
  </div>
);

export default GetStarted
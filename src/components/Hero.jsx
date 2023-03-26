import React from 'react';
import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col md:flex-row flex-row ${styles.paddingY}`}>
      <div className={`flex-1 flex-col ${styles.flexStart} px-6 sm:px-16 xl:px-0`}>
        <div className='flex flex-row bg-discount-gradient rounded-[10px] items-center py-[6px] px-4 mb-2'>
          <img src={discount} alt="discount" />
          <p className={`ml-2 ${styles.paragraph}`}>
            <span className='text-white'>20% </span>DISCOUNT FOR <span className='text-white'>1MONTH </span> ACCOUNT
          </p>
        </div>
        <div className='flex flex-row justify-between w-full items-center'>
          <h1 className='flex-1 font-poppins font-semibold text-[52px] ss:text-[72px] text-white leading-[75px] ss:leading-[100.8px]'>The Next 
          <br className='hidden sm:block'/> 
          {" "}<span className='text-gradient'>Generation</span>{" "}
          </h1>
          <div className='hidden ss:flex mr-0 md:mr-4'>
          <GetStarted />
          </div>
        </div>
        <h1 className='font-poppins font-semibold text-[52px] ss:text-[68px] text-white leading-[75px] ss:leading-[100.8px] w-full'>
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates, annual fees.
        </p>
      </div>
      <div className={`${styles.flexCenter} flex-1 relative my-10 md:my-0`}>
          <img src={robot} alt="billing" className='w-[100%] h-[100%] z-[5] relative '/>

          <div className='w-[40%] h-[35%] pink__gradient absolute top-0 z-[0]'/>
          <div className='w-[80%] h-[80%] rounded-full white__gradient absolute bottom-20 z-[1]'/>
          <div className='w-[50%] h-[50%] blue-gradient absolute right-20 bottom-20 z-[0]'/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero
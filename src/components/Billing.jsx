import React from 'react'
import styles,{layout} from '../style';
import { bill, apple, google} from '../assets';
const Billing = () => (
  <section className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]'></img>
 
      {/* gradient start */}
      <div className='w-[50%] h-[50%] white__gradient absolute top-0 -left-1/2 rounded-full z-[3]'/>
      <div className='w-[50%] h-[50%] pink__gradient absolute bottom-0 -left-1/2 rounded-full z-[0]'/>
      {/* gradient end */}

    </div>
    <div className={`${layout.sectionInfo}`}>
      <h1 className={`${styles.heading2}`}>
      Easily control your 
      <br/>
      billing & invoicing.
      </h1>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
      Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className='flex flex-row flex-wrap mt-10'>
        <img src={apple} alt="App Store" className='mr-5 cursor-pointer w-[128x] h-[42px] object-contain'/>
        <img src={google} alt="Google Play" className='cursor-pointer w-[144px] h-[43px] object-contain'/>
      </div>
    </div>
  </section>
);

export default Billing
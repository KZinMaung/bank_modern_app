import React from 'react'
import { clients } from '../constants';
import styles from '../style';

const Clients = () =>(
  <section id="clients" className='my-4'>
    <div className={`w-full ${styles.flexCenter} flex-wrap`}>
      {
        clients.map((client)=>(
          <div className={`flex-1 min-w-[120px] sm:min-w-[192px] m-5 ${styles.flexCenter}`}>
            <img src={client.logo} alt="client_logo" className='w-[100px] sm:w-[192px] object-contain'/>
          </div>
        ))
      }
    </div>
  </section>
);

export default Clients
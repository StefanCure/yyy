import React from 'react';
//import phoneImg from './images/phone.svg';
import './hero.css';
import Form from "./Form"
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu, showMarket, showLimit, isMarketShow } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <div className="form">
            <div className="my-btn-group">
              <button className={`${isMarketShow?"nav_btt btt_active":"nav_btt"}`} onClick={showMarket} >Market</button> <button className={`${isMarketShow?"nav_btt":"nav_btt btt_active"}`}  onClick={showLimit} >limit</button>
              </div>
              <Form value={isMarketShow} />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;

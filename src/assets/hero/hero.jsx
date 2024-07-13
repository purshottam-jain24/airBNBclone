import React from 'react';
import png from '/grid.png';

export default function Hero() {
  return (
    <div id="root-element">
      <div id='hero-image'>
        <img src={png} alt="" />
      </div>
      <div id="hero-after-img">
        <div id='hero-h1'>
          <h1>Online Experiences</h1>
        </div>
        <div id="hero-p">
          <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
      </div>
    </div>
  );
}

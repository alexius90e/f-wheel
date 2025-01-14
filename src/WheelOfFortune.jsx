import { useState } from 'react';
import './WheelOfFortune.scss';

const WheelOfFortune = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const items = [
    { id: 0, text: 'booster 30 minutes', color: '#420103' },
    { id: 1, text: '10 COINS', color: '#C42930' },
    { id: 2, text: 'booster 30 minutes', color: '#420103' },
    { id: 3, text: '20 COINS', color: '#C42930' },
    { id: 4, text: 'booster 30 minutes', color: '#420103' },
    { id: 5, text: '30 COINS', color: '#C42930' },
    { id: 6, text: '+2 spins', color: '#681fbf' },
    { id: 7, text: '10 COINS', color: '#C42930' },
  ];

  const stepDegree = 360 / items.length;

  const spinWheel = () => {
    if (spinning) return;

    const wheel = document.querySelector('.wheel-of-fortune__wheel');

    wheel.style.transition = 'transform 0s ease-out';
    wheel.style.transform = `rotate(${0}deg)`;

    const randomAngle = 360 * 5 + Math.floor(Math.random() * 360);

    setTimeout(() => {
      setSpinning(true);
      setResult(null);
      wheel.style.transition = 'transform 3s ease-out';
      wheel.style.transform = `rotate(${randomAngle}deg)`;
    }, 10);

    setTimeout(() => {
      const degrees = randomAngle % 360;
      const index = items.length - 1 - Math.floor((degrees / 360) * items.length);
      setResult(items[index]);
      setSpinning(false);
    }, 3500);
  };

  return (
    <div className='wheel-of-fortune'>
      <div className='wheel-of-fortune__wrapper'>
        <div className='wheel-of-fortune__container'>
          <div className='wheel-of-fortune__wheel'>
            {items.map((item) => (
              <div
                className='wheel-of-fortune__wheel-item'
                key={item.id}
                style={{
                  transform: `translateX(-50%) rotate(${stepDegree * item.id + stepDegree / 2}deg)`,
                }}
              >
                <div className='wheel-of-fortune__wheel-item-info'>
                  <div className='wheel-of-fortune__wheel-item-info-text'>{item.text}</div>
                  <img className='wheel-of-fortune__wheel-item-info-icon' src='' alt='' />
                </div>

                <svg
                  className='wheel-of-fortune__wheel-item-sector'
                  width='180'
                  height='237'
                  viewBox='0 0 180 237'
                  fill={item.color}
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M175.167 20.6818L89.9266 226.619L4.83301 20.6818C57.4123 -1.17332 118.34 -2.93347 175.167 20.6818Z'
                    stroke='#FFD745'
                    strokeWidth='5'
                  />
                  <path
                    d='M175.167 20.6818L89.9266 226.619L4.83301 20.6818C57.4123 -1.17332 118.34 -2.93347 175.167 20.6818Z'
                    stroke='#FFD745'
                    strokeWidth='5'
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='wheel-of-fortune__result'>
        {result && <div className='result'>You win: {result.text}</div>}
      </div>

      <div className='wheel-of-fortune__buttons'>
        <button
          className='wheel-of-fortune__button wheel-of-fortune__button_spin'
          onClick={spinWheel}
        >
          {spinning ? 'SPINING...' : 'SPIN'}
        </button>
        <button className='wheel-of-fortune__button wheel-of-fortune__button_ads'>Watch ADS</button>
      </div>
    </div>
  );
};

export default WheelOfFortune;

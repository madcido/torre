import React from 'react';
import '../css/Counter.css';

function Counter({expiration}) {
  const remainingTime = Math.floor((expiration.getTime() - Date.now())/1000);
  const seconds = remainingTime%60;
  const minutes = Math.floor(remainingTime/60)%60;
  const hours = Math.floor(remainingTime/3600)%24;
  const days = Math.floor(remainingTime/(24*3600));
  if (remainingTime > 0) {
    return (
      <div className='counter row center'>
        <p>{days}<span>DAYS</span></p>
        <p>{hours}<span>HOURS</span></p>
        <p>{minutes}<span>MIN</span></p>
        <p>{seconds}<span>SEC</span></p>
      </div>
    );
  } else {
    return (
      <p>EXPIRED</p>
    );
  }
}

export default Counter;

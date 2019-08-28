import React from 'react';
import '../css/Card.css';
import '../css/HowWeHelp.css';

function HowWeHelp({data}) {
  return (
    <div className="card how-we-help row center justify-start">
      <img src={data.image} alt="" />
      <div>
        <p>{data.title}</p>
        <p>{data.description}</p>
      </div>
      <p className="down-arrow">⌄</p>
    </div>
  );
}

export default HowWeHelp;

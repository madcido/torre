import React from 'react';
import '../css/Card.css';

function HowWeHelp({data}) {
  return (
    <div className="card static-card row center justify-start">
      <img src={data.image} />
      <div>
        <p>{data.title}</p>
        <p>{data.description}</p>
      </div>
      <p className="down-arrow">⌄</p>
    </div>
  );
}

export default HowWeHelp;

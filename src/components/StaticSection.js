import React from 'react';
import '../css/Section.css';
import * as allCards from './Cards';
import Display from './Display';

function StaticSection({title, cardType, cardData}) {
  const Card = allCards[cardType];
  return (
    <div className="container">
      <div className="section-head">
        <h1>{title}</h1>
      </div>
      <div className="row">
        {cardData.map(data =>
          <Card data={data} key={cardData.indexOf(data)} />
        )}
      </div>
      <Display />
    </div>
  );
}

export default StaticSection;

import React from 'react';
import '../css/StaticSection.css';
import * as allCards from './Cards';

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
    </div>
  );
}

export default StaticSection;

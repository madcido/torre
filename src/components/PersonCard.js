import React from 'react';
import '../css/Card.css';
import '../css/PersonCard.css';
import HexagonBorder from './HexagonBorder';
import PersonInfo from './PersonInfo';
import SignalButton from './SignalButton';

function PersonCard({data}) {
  return (
    <div className='card person-card col center'>
      <div className='person-avatar'>
        <HexagonBorder image={data.avatar} />
      </div>
      <PersonInfo data={data} />
      <p>Open to: {data.openTo}</p>
      <SignalButton />
    </div>
  );
}

export default PersonCard;

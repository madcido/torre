import React from 'react';
import '../css/Card.css';
import '../css/ConsultantCard.css';
import HexagonBorder from './HexagonBorder';
import PersonInfo from './PersonInfo';
import SignalButton from './SignalButton';

function ConsultantCard({data}) {
  return (
    <div className='card consultant-card col center'>
      <div className='person-avatar'>
        <HexagonBorder image={data.avatar} />
      </div>
      <PersonInfo data={data} />
      <p>Open to: {data.openTo}</p>
      <SignalButton />
    </div>
  );
}

export default ConsultantCard;

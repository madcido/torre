import React from 'react';
import '../css/Card.css';
import '../css/ConsultantCard.css';
import HexagonBorder from './HexagonBorder';
import SignalButton from './SignalButton';
import Icon from '@mdi/react';
import { mdiWeight, mdiCheckDecagram } from '@mdi/js';

function ConsultantCard({data}) {
  return (
    <div className='card consultant-card col center'>
      <div className='consultant-avatar'>
        <HexagonBorder image={data.avatar} />
      </div>
      <div className='consultant-info col center'>
        <img src='https://img.freepik.com/free-vector/abstract-waves-design_1048-7600.jpg?size=626&ext=jpg' alt='' />
        <div className='consultant-info-head row center'>
          <p>{data.name}</p>
          <Icon path={mdiCheckDecagram} title='Verified' size={0.8} color='#777'/>
          <Icon path={mdiWeight} title='Weight' size={0.8} color='#333' />
          <p className='upvotes'>{data.upVotes}</p>
        </div>
        <p>{data.position}</p>
        <p className='tag row'>{data.tag}<span>{data.tagVotes}</span></p>
      </div>
      <p>Open to: {data.openTo}</p>
      <SignalButton />
    </div>
  );
}

export default ConsultantCard;

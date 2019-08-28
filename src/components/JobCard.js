import React from 'react';
import '../css/Card.css';
import '../css/JobCard.css';
import HexagonBorder from './HexagonBorder';
import Counter from './Counter';
import SignalButton from './SignalButton';
import Icon from '@mdi/react';
import { mdiShareVariant } from '@mdi/js';

function JobCard({data}) {
  return (
    <div className='card job-card'>
      <div className='company-template' style={{backgroundImage: 'url(' + data.template + ')'}}>
        <div className='company-logo row center justify-center'>
          <HexagonBorder image={data.logo} />
        </div>
      </div>
      <p>{data.title}</p>
      <div className='row center'>
        <p>{data.company}</p>
        <SignalButton />
      </div>
      <p>{data.type}</p>
      <p>USD $<span>{data.salary}</span>/year</p>
      <div className='row center'>
        <p>Team members:</p>
        {data.members.map(member =>
          <a href='#' className='team-members' key={data.members.indexOf(member)}>
            <img src={member} alt='' />
          </a>
        )}
      </div>
      <div className='row center'>
        <p>Your rank: {data.rank}</p>
        <a href='#'>SIGN IN</a>
      </div>
      <div className='row center'>
        <p>Time left:</p>
        <Counter expiration={data.expires} />
      </div>
      <div className='question col'>
        <p>{data.question}</p>
        <p>ASK A QUESTION</p>
      </div>
      <div className='action row center justify-end'>
        <Icon path={mdiShareVariant} title='Share' size={1} color="#00acc1" />
        <p>REFER</p>
        <p>VIEW</p>
      </div>
    </div>
  );
}

export default JobCard;

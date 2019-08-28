import React from 'react';
import '../css/PersonInfo.css';
import Icon from '@mdi/react';
import { mdiWeight, mdiCheckDecagram } from '@mdi/js';

function PersonInfo({data}) {
  return (
    <div className='person-info col center'>
    <img src='https://img.freepik.com/free-vector/abstract-waves-design_1048-7600.jpg?size=626&ext=jpg' alt='' />
      <div className='person-info-head row end'>
        <p>{data.name}</p>
        <Icon path={mdiCheckDecagram} title='Verified' size={0.8} color='#777'/>
        <Icon path={mdiWeight} title='Weight' size={0.8} color='#333' />
        <p className='upvotes'>{data.upVotes}</p>
      </div>
      <p>{data.position}</p>
      <p className='tag row'>{data.tag}<span>{data.tagVotes}</span></p>
    </div>
  );
}

export default PersonInfo;

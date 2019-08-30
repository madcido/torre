import React from 'react';
import '../css/Card.css';
import '../css/HowWeHelp.css';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

function HowWeHelp({data, click, index}) {
  return (
    <div className="card how-we-help row center justify-start" onClick={click} data-index={index}>
      <img src={data.image} alt="" />
      <div>
        <p>{data.title}</p>
        <p>{data.description}</p>
      </div>
      <Icon path={mdiChevronDown} size={1} color='#00acc1' />
    </div>
  );
}

export default HowWeHelp;

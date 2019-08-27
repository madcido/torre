import React from 'react';
import '../css/Navlink.css';
import Icon from '@mdi/react';
import * as All from '@mdi/js';

function Navlink({icon, label, anchor}) {
  return (
    <a className="navlink col center justify-center" href={anchor}>
      <Icon path={All[icon]} title={label} size={1} color="#777" />
      <p>{label}</p>
    </a>
  );
}

export default Navlink;

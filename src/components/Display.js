import React from 'react';
import '../css/Display.css';

function Display({data}) {
  return (
    <div className="display row center justify-center">
      <div className=''>
        <p>{data.title}</p>
        <p>Some random text</p>
      </div>
    </div>
  );
}

export default Display;

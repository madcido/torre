import React from 'react';
import '../css/HexagonBorder.css';

function HexagonBorder({image}) {
  return (
    <div className='hexagon hex-border row center justify-center'>
      <img className='hexagon' src={image} alt='' />
    </div>
  );
}

export default HexagonBorder;

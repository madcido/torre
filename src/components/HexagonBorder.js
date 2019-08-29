import React from 'react';

function HexagonBorder({image, width = 6, color = 'white'}) {
  return (
    <svg viewBox='0 0 100 120'>
      <defs>
        <clipPath id="hexagon_clip">
          <path id='hexagon'
            d={`M 44, ${6 + width/2}
              A 12 12 0 0 1 56, ${6 + width/2}
              L ${94 - width/2}, 28
              A 12 12 0 0 1 ${100 - width/2}, 40
              L ${100 - width/2}, 80
              A 12 12 0 0 1 ${94 - width/2}, 92
              L 56, ${114 - width/2}
              A 12 12 0 0 1 44, ${114 - width/2}
              L ${6 + width/2}, 92
              A 12 12 0 0 1 ${width/2}, 80
              L ${width/2}, 40
              A 12 12 0 0 1 ${6 + width/2}, 28
              Z`} />
        </clipPath>
      </defs>
      <image href={image} width='100' height='120' clip-path="url(#hexagon_clip)" />
      <use href="#hexagon" stroke={color} stroke-width={width} fill="transparent" />
    </svg>
  );
}

export default HexagonBorder;

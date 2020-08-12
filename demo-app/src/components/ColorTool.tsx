import React from 'react';

import { Color } from '../models/Color';

export const ColorTool = () => {

  const colors: Color[] = [
    { id: 1, name: 'red', hexcode: 'FF0000' },
    { id: 2, name: 'blue', hexcode: '00FF00' },
    { id: 3, name: 'green', hexcode: '0000FF' },
  ];

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map(color =>
          <li key={color.id}>{color.name}</li>)}
      </ul>
    </>
  );

};
import React from 'react';
import ReactDOM from 'react-dom';

import { Color } from './models/Color';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';
import { CarStoreProvider } from './contexts/carStoreContext';

const colorList: Color[] = [
  { id: 1, name: 'red', hexcode: 'FF0000' },
  { id: 2, name: 'blue', hexcode: '00FF00' },
  { id: 3, name: 'green', hexcode: '0000FF' },
];

ReactDOM.render(
  // React.createElement(
  //   React.Fragment, null,
  //   React.createElement(ColorTool),
  //   React.createElement(CarTool)),
  <>
    <ColorTool colors={colorList} />
    <CarStoreProvider>
      <CarTool />
    </CarStoreProvider>
  </>,
  document.querySelector('#root'),
);

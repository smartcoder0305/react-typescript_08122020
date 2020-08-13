import React from 'react';
import ReactDOM from 'react-dom';

import { Color } from './models/Color';
import { Car } from './models/Car';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList: Color[] = [
  { id: 1, name: 'red', hexcode: 'FF0000' },
  { id: 2, name: 'blue', hexcode: '00FF00' },
  { id: 3, name: 'green', hexcode: '0000FF' },
];

const carList: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'red', price: 50000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2018, color: 'blue', price: 120000 },
];

ReactDOM.render(
  // React.createElement(
  //   React.Fragment, null,
  //   React.createElement(ColorTool),
  //   React.createElement(CarTool)),
  <>
    <ColorTool colors={colorList} />
    <CarTool cars={carList} />
  </>,
  document.querySelector('#root'),
);

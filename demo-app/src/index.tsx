import React from 'react';
import ReactDOM from 'react-dom';

import { HelloWorld } from './components/HelloWorld';

ReactDOM.render(
  // React.createElement(HelloWorld),
  <HelloWorld />,
  document.querySelector('#root'),
);
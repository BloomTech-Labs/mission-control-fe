import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import Middleware from './middleware';

import 'normalize.css';

render(
  <Middleware>
    <App />
  </Middleware>,
  document.getElementById('root')
);

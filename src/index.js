import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

import Middleware from './middleware';

import 'normalize.css';

render(
  <Middleware>
    <App />
  </Middleware>,
  document.getElementById('root')
);

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import Middleware from './middleware';

render(
  <Middleware>
    <App />
  </Middleware>,
  document.getElementById('root')
);

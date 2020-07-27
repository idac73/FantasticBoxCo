import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <BrowserRouter
    basename={process.env.PUBLIC_URL === '' ? '' : process.env.PUBLIC_URL}
  >
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

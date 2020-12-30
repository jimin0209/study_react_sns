import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//리액트는 가상 돔

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //루트라는 가상돔 안에 루트라는 애가 들어간다. 루트는 app.js
);

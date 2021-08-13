import "./main.scss"
import img from "./favicon.ico";

import React from 'react';
import ReactDOM from 'react-dom';
import Container from './container/comp-container'
// const elem = <h1>Hello world</h1>

ReactDOM.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  document.getElementById('container')
);
import React from 'react';
import ReactDOM from 'react-dom';
import Streamfinder from './app/Streamfinder';
// import style from './style.css';

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.hydrate(
    <Streamfinder />,
    document.getElementById('ssr-app')
  );
});

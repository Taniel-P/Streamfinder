import React from 'react';
import ReactDOM from 'react-dom';
import Streamfinder from './app/Streamfinder';
// import style from './style.css';

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Streamfinder sessionToken={ window.localStorage.getItem('sessionToken') } />,
    document.getElementById('Streamfinder')
  );
});

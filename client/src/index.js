import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/css/index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';

import config from './Config/config'

const {cloud_name, upload_preset} = config

ReactDOM.render(
  <React.StrictMode>
    <App cloudName={cloud_name} uploadPreset={upload_preset}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
// We aren't going to use custom CSS
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* This is the main rendering engine that renders the App.js inside the 'root'
 * <div> in ../public/index.html.
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

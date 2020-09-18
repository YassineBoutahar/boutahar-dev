import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Sugar } from 'react-preloaders';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Sugar color={'#e0ebff'} background="linear-gradient(180deg, #333e5b 0%, #1a2139 100%)" time={1300}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

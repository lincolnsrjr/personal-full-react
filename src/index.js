import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import './css/animate.css';
import './css/icomoon.css';
import './css/simple-line-icons.css';
import './css/style.css';
import './css/blue.css';
ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();

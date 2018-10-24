import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
//import App from './views/App';
//import Register from './views/Register'
import Login from './views/Login'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

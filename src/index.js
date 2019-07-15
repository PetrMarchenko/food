// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



import React from 'react';
import routes from './routing/routes';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { Router } from 'react-router';
import history from './history';

const target = document.querySelector('#root');

render(
    <Router history={ history }>
        <Route>{ routes }</Route>
    </Router>,
    target
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import './global.css'

ReactDOM.render(
<BrowserRouter basename={process.env.PUBLIC_URL}>
    <Route exact path="" component={App} />
</BrowserRouter>
, document.getElementById('root'));
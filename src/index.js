import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Admin from './layouts/Admin';
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/" exact component={Admin} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/admin" />
    </Switch>
  </BrowserRouter>,
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Test from './pages/Test.jsx';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
    </div>
  </BrowserRouter>,
  document.getElementById('app'),
);

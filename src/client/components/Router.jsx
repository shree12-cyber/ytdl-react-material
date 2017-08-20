import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';

export default function Router() {
  return (
    <div id="container">
      <Route path="/" component={Main} />
      <Route path="/max" render={() => 'aaa'} />
    </div>
  );
}

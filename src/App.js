import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/homePage/Homepage.component';

import {GlobalStyle} from './global.styles';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
      <Switch>
      <Route exact path='/' component={Homepage} />

      </Switch>
      </div>
    )
  }
}
export default App;

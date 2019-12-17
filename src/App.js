import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/homePage/Homepage.component';
import Contacts from './pages/contacts/contacts.component';

import {GlobalStyle} from './global.styles';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/contacts' component={Contacts} />
      </Switch>
      </div>
    )
  }
}
export default App;

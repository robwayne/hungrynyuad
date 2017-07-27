import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from '../imports/App.js';


let store = createStore(todoApp)

const ClientApp = () => (
  <Provider store={store>}
    <Router>
      <App />
    </Router>
  </Provider
)

Meteor.startup(() => {
  render(<ClientApp />, document.getElementById('__react'));
});

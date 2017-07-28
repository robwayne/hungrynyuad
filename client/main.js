import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom'
import logger from 'redux-logger'

import App from '../imports/App.js';
import { getIDToken, getAccessToken } from '../imports/utils/AuthService.js'
import rootReducer from '../imports/reducers'

let store = createStore(rootReducer, applyMiddleware(logger))

const ClientApp = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

Meteor.startup(() => {
  render(<ClientApp />, document.getElementById('__react'));
});

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/App.js';
import { BrowserRouter } from 'react-router-dom'

const ClientApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

Meteor.startup(() => {
  render(<ClientApp />, document.getElementById('__react'));
});

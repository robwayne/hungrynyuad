import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Slideout } from 'meteor/patrickleet:slideout';

Template.layout.onRendered(function(){
  const template = this;
  slideoutInstance = new Slideout({
    'menu':template.$('#side-menu').get(0),
    'panel':template.$('#main-content').get(0),
    'padding':256,
    'tolerance':70,
    'grabWidth':180
  });
});

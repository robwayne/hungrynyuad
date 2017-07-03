import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.navigation.events({
  'click #btn-home'(event, template){
    event.preventDefault();
    FlowRouter.go('/home');
  },
  'click #btn-trending'(event, template){
    event.preventDefault();
    FlowRouter.go('/trending');

  },
  'click #btn-closing'(event, template){
    event.preventDefault();
    FlowRouter.go('/closing');
  }
})

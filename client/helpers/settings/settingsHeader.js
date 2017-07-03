import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouterHelpers } from 'meteor/arillo:flow-router-helpers';

Template.settingsHeader.events({
  'click .btn-back'(event, template){
    event.preventDefault();
    if(FlowRouter.getRouteName() !== 'Settings'){
      FlowRouter.go(FlowRouter.path('Settings'));
    } else {
      //Add code to go back to slide out menu / close slideout menu
    }
  }
});

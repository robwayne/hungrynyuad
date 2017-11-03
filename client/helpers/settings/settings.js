import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.settings.events({
  'click .btn-logout'(event, template){
    event.preventDefault();
    Meteor.logout(error=>{
      if(error){
        console.log(error.reason||"Unknow error Occured.");
      }
    });
  },
  'click .profile-btn'(event){
    event.preventDefault();
    FlowRouter.go(FlowRouter.path('Register'));
  },
  'click .favorites-btn'(event){
    event.preventDefault();
    FlowRouter.go(FlowRouter.path('Favorites'));
  }
})

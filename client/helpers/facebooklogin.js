import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.facebooklogin.events({
  'click #login-btn'(event){
    event.preventDefault();
    Meteor.loginWithFacebook({
      requestPermissions: ['public_profile', 'email',]
    }, (err) => {
      if(err){
        Session.set('facebookLoginError', err.reason || "Unknown error");
      }
      else{
        FlowRouter.go("/");
      }
    });
  },

  'click .btn-link'(event){
    event.preventDefault();
    console.log('cancel button pressed');
  }
});

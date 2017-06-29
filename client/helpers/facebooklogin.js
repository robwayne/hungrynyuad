import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Session } from 'meteor/session';

Template.facebooklogin.onCreated(function facebookloginOnCreated(){
  this.state = new ReactiveDict();
});


Template.facebooklogin.events({
  'click #login-btn'(event, template){
    event.preventDefault();
    let message = "";
    Meteor.loginWithFacebook({
      requestPermissions: ['public_profile', 'email',]
    }, (err) => {
      if(err){
        message = err.reason || "Unknown error occured while trying to login with Facebook."
        Session.set("authError", message);
        console.log(err);
      }
      else{
        message = "Facebook Login Successful.";
        Session.set("authSuccess", message);
        Meteor.setTimeout(()=>{
          FlowRouter.go("/");
        }, 2000);

      }
    });
  },

  'click .btn-link'(event){
    event.preventDefault();
    console.log('cancel button pressed');
  }
});

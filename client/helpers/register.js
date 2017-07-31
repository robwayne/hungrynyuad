import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Session } from 'meteor/session';
import {getErrorMessage, registerAccountSchema } from '/lib/schemas/userAccountsSchema.js';

Template.register.onCreated(function registerOnCreated(){
  this.state = new ReactiveDict();
});

// Template.register.onDestroyed(function registerOnDestroyed(){
//   Session.keys = {};
// });

Template.register.events({
  'submit #register-form'(event, template){
    event.preventDefault();
    const name = $('#nameInput').val().trim();
    const email = $('#emailInput').val().trim();
    const password = $('#passwordInput').val().trim();
    const confirmPassword = $('#confirmPasswordInput').val().trim();

    accountDetails = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };
    let message = "";
    let errorMessages = {};
    let errorName = "";
    //Clear state Dict incase it is already populated
    template.state.clear();

    try {
      registerAccountSchema.validate(accountDetails);
      Accounts.createUser({
        email: accountDetails.email,
        password: accountDetails.password,
        name: accountDetails.name
      }, err => {
        if(err){
          message = err.reason || "Unknown registration error occured.";
          Session.set('authError', message)

          $('#passwordInput').val('');
          $('#confirmPasswordInput').val('');
        }
        else {
          message = "Account Created Successfully.";
          Session.set('authSuccess', message);
          Meteor.setTimeout(function(){
            FlowRouter.go('/home');
          }, 1000);
        }
      }); //Close Accounts.createUser();
    }
    catch(error){ //Catch the validation errors
      error.details.forEach(function(e){
        errorName = e.name+"Error";
        message = getErrorMessage(e);
        if(accountDetails[e.name] === ""){
          if(e.name != "confirmPassword"){
            message = e.name.replace(/\b\w/g, l => l.toUpperCase())+" is required.";
          }else {
            message = "Confirm Password is required.";
          }
        }
        if(message !== "")
          template.state.set({
            [errorName]:message
          });
      });
      $('#passwordInput').val('');
      $('#confirmPasswordInput').val('');
    }
    Meteor.setTimeout(()=>{
      Session.keys = {};
    },2000);
  }

});

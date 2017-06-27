import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor';
import { ReactiveDict } from 'meteor/reactive-dict';
import {getErrorMessage, registerAccountSchema } from '/client/helpers/schemas/userAccountsSchema.js';

Template.register.onCreated(function registerOnCreated(){
  this.state = new ReactiveDict();
});

Template.register.events({
  'submit #register-form'(event){
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
    try {
      signUpAccountSchema.validate(accountDetails);
      Accounts.createUser({
        email: accountDetails.email,
        password: accountDetails.password,
        name: accountDetails.name
      }, err => {
        if(err){
          message = err.reason || "Unknown error occured";
          thisTmp.setState({
            "errors": [message]
          });
          $('#passwordInput').val('');
          $('#confirmPasswordInput').val('');
        }
        else {
          message = "Account Created Successfully.";
          FlowRouter.go('/home');
        }
      }); //Close Accounts.createUser();
    }
    catch(error){ //Catch the validation errors
      const errorMessages = [];
      error.details.forEach(function(e){
        message = getErrorMessage(e);
        if(message !== "")
          errorMessages.push(message);
      });
      this.state.set(
        errors: errorMessages
      );
      $('#passwordInput').val('');
      $('#confirmPasswordInput').val('');
    }
  }
});

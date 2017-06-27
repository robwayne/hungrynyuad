import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { loginSchema, getErrorMessage } from '/client/helpers/schemas/userAccountsSchema.js';


Template.signin.onCreated(function signinOnCreated(){
  this.state = new ReactiveDict();
});

Template.signin.events({
  'submit #signin-form'(event, template){
    event.preventDefault();
    //retrieve info from input field
    const email = $('#emailInput').val().trim();
    const password = $('#passwordInput').val().trim();

    let message = "";
    let errorMessages = {};
    let errorName = "";
    //Clear Errors Dict if already populated - shows only field with errors
    if(template.state.get("emailError") || template.state.get("loginPasswordError") || template.state.get("loginError")){
      template.state.set("emailError", null);
      template.state.set("loginPasswordError", null);
      template.state.set("loginError", null);
    }

    const loginDetails = {
      email: email,
      loginPassword: password
    };

    try {
      loginSchema.validate(loginDetails);
      Meteor.loginWithPassword(email, password, function (err) {
        if(err){
          message = err.reason || "Unknown login error occurred";
          template.state.set({
            'signingInError':message
          });
          $('#passwordInput').val('');
        }
        else {
          message = "Login Successful.";
          console.log(message);
          Meteor.setTimeout(function () {
            FlowRouter.go('/home');
          }, 1000);
        }
      });
    }
    catch (error){
      //for each error encountered - add to the reactiveDict - state along with appropriate error Message
      error.details.forEach((e)=> {
        errorName = e.name+"Error";
        message = getErrorMessage(e);
        if(email === "" && errorName === "emailError"){
          message = "Email is required."
        }
        if(message !== "") {
          template.state.set({
            [errorName]:message
          });
        }
      });
      $('#passwordInput').val('');
    }
  }
});

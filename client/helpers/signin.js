import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import { loginSchema, getErrorMessage } from '/client/helpers/schemas/userAccountsSchema.js';


Template.signin.onCreated(function signinOnCreated(){
  this.state = new ReactiveDict();
});

// Template.signin.onDestroyed(function signinOnDestroyed(){
//   Session.keys = {};
// });

Template.signin.events({
  'submit #signin-form'(event, template){
    event.preventDefault();
    //retrieve info from input field
    const email = $('#emailInput').val().trim();
    const password = $('#passwordInput').val().trim();

    let message = "";
    let errorMessages = {};
    let errorName = "";
    //Clear state Dict if already populated
    template.state.clear();


    const loginDetails = {
      email: email,
      loginPassword: password
    };

    try {
      loginSchema.validate(loginDetails);
      Meteor.loginWithPassword(email, password, function (err) {
        if(err){
          message = err.reason || "Unknown login error occurred";
          Session.set('authError', message);
          $('#passwordInput').val('');
        }
        else {
          message = "Login Successful.";
          Session.set("authSuccess", message);
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
    Session.keys = {};
    console.log('end');
  }
});

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
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

    loginDetails = {
      email: email,
      password: password
    };
    console.log(loginDetails);

    let message = "";
    let errorMessages = {};
    try {
      loginSchema.validate(loginDetails);
      Meteor.loginWithPassword(email, password, function (err) {
        if(err){
          message = err.reason || "Unknown login error occurred";
          errorMessages = {
            "login": message
          };
          // template.state.set({
          //   errors: errorMessages
          // });
          $('#passwordInput').val('');
        }
        else {
          message = "Login Successful.";
          console.log(message);
          // thisTmp.state.set({
          //   successes: [message],
          //   errors: []
          // });
          Meteor.setTimeout(function () {
            FlowRouter.go('/');
          }, 1000*2);
        }
      });
    }
    catch (error){
      error.details.forEach((e)=> {
        message = getErrorMessage(e);
        if(message !== "")
          errorMessages[e.name] = message;
      });
      // template.state.set({
      //   errors: errorMessages
      // });
      console.log(template.state.get('errors'));
      $('#passwordInput').val('');
    }
  }
});

Template.signin.helpers({
  hasErrors(){
    const template = Template.instance();
    return template.state.get("errors");
  }
});

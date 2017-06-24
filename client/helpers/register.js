import { Template } from 'meteor/templating'
import { Meteor } from 'meteor/meteor';

Template.register.events({
  'submit #register-form'(event){
    event.preventDefault();
    const name = $('#nameInput').val().trim();
    const email = $('#emailInput').val().trim();
    const password = $('#passwordInput').val().trim();
    const confirmPassword = $('#confirmPasswordInput').val().trim();
    const thisTmp = this;

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
            errors: [message]
          });
          ReactDOM.findDOMNode(thisTmp.refs.password).value = '';
          ReactDOM.findDOMNode(thisTmp.refs.confirmPassword).value = '';
        }
        else {
          message = "Account Created Successfully.";
          thisTmp.setState({
            successes: [message]
          })
          Meteor.setTimeout(function () {
            FlowRouter.go('/');
          }, 1000*2);
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
      this.setState({
        errors: errorMessages
      });
      ReactDOM.findDOMNode(thisTmp.refs.password).value = '';
      ReactDOM.findDOMNode(thisTmp.refs.confirmPassword).value = '';
    }
  }
});

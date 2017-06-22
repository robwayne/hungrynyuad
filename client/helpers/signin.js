import { Meteor } from 'meteor/meteor';
import { loginSchema, getErrorMessage } from '/client/helpers/schemas/userAccountsSchema';

Template.signin.events({
  'submit #signin-form'(event){
    event.preventDefault();
    //retrieve info from input fields
    const email = $('#emailInput').val().trim();
    const password = $('#passwordInput').val().trim();
    const thisTmp = this;

    loginDetails = {
      email: email,
      password: password
    }
    console.log(this);
    let message = "";
    try {
      loginSchema.validate(loginDetails);
      Meteor.loginWithPassword(email, password, function (err) {
        if(err){
          message = err.reason || "Unknown error";
          thisTmp.setState({
            errors: [message]
          });
          ReactDOM.findDOMNode(thisTmp.refs.passwordField).value = '';
        }
        else {
          message = "Login Successful."
          thisTmp.setState({
            successes: [message],
            errors: []
          });
          Meteor.setTimeout(function () {
            FlowRouter.go('/');
          }, 1000*3);

        }
      });
    }
    catch (error){
      const errorMessages = [];
      error.details.forEach((e)=> {
        message = getErrorMessage(e);
        if(message !== "")
          errorMessages.push(message);
      });
      this.setState({
        errors: errorMessages
      });
      $('#passwordInput').val('');
    }
  }
});

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tracker } from 'meteor/tracker';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.registerHelper('fieldHasErrors', (field) =>{
  const template = Template.instance();
  const errorName = field+"Error";
  if(field === "auth"){
    return Session.get("authError");
  }
  return template.state.get(errorName);
});

Template.registerHelper('renderHtml', (type, field) => {
  const template = Template.instance();
  let html = "";

  if(type==="success"){
    let successMessage = "";
    let successName = field+"Success";
    if(field==="auth"){
      successMessage = Session.get(successName);
    } else {
      successMessage = template.state.get(successName);
    }
    if(successMessage){
      html = "<div id='success-feedback' class='w-100'><p class='text-center feedback-message text-success'>";
      html = html+"<i aria-hidden='true' class='fa fa-check-circle'></i> "+successMessage+"</p></div>";
    }
  } else if (type === "error") {
    const errorName = field+"Error";
    let errorMessage = "";
    if(field==="auth" && (errorMessage = Session.get(errorName))){
      html = "<div id='error-feedback' class='w-100'><p class='text-center text-danger feedback-message'>";
      html = html+"<i aria-hidden='true' class='fa fa-exclamation-circle'></i> "+errorMessage+"</p></div>";
    } else if((errorMessage = template.state.get(errorName))) {
      html = "<div id='email-feedback' class='w-100'><p class='text-center error-message'>"+errorMessage+"</p></div>";
    }
  }
  return html;
});

Template.registerHelper('routeName', ()=>{
  return FlowRouter.getRouteName();
});

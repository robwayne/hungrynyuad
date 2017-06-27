import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.registerHelper('fieldHasErrors', (field) =>{
  const template = Template.instance();
  const errorName = field+"Error";
  return template.state.get(errorName);
});

Template.registerHelper('renderErrorHtml', field => {
  const template = Template.instance();
  const errorName = field+"Error";
  const errorMessage = template.state.get(errorName);
  let html = "";
  if(errorMessage){
    if(field === "signingIn"){
      html = "<div id='email-feedback' class='w-100'><p class='text-center login-error-message'>";
      html = html+"<i aria-hidden='true' class='fa fa-exclamation-circle'></i> "+errorMessage+"</p></div>";
    } else {
      html = "<div id='email-feedback' class='w-100'><p class='text-center error-message'>"+errorMessage+"</p></div>";
    }
  }
  return html;
});

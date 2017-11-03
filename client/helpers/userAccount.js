import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { check, Match } from 'meteor/check';


Template.userAccount.onCreated(()=>{
  const template = Template.instance();
  template.editing = new ReactiveVar(false);
});

Template.userAccount.events({
  'keyup .edit-user-name':function(event, template){
    template.editing.set(true);
    let userProfile = Meteor.user().profile;
    let editName = $('.edit-user-name').val().trim();
    let editEmail = $('.edit-user-email').val().trim();

    if(editEmail === userProfile.email && editName === userProfile.name){
      template.editing.set(false);
    }
  },
  'keyup .edit-user-email':function(event, template){
    template.editing.set(true);

    let userProfile = Meteor.user().profile;
    let editEmail = $('.edit-user-email').val().trim();
    let editName = $('.edit-user-name').val().trim();

    if(editEmail === userProfile.email && editName === userProfile.name){
      template.editing.set(false);
    }
  },
  'click .save-button':function(event, template){
    event.preventDefault();
    let editEmail = $('.edit-user-email').val().trim();
    let editName = $('.edit-user-name').val().trim();
    let oldPassword =  $('.edit-old-password').val().trim();
    let newPassword =  $('.edit-new-password').val().trim();

    editUser = {};
    userProfile = Meteor.user().profile;
    editUser.name = (editName !== userProfile.name) ? editName : undefined;
    editUser.email = (editEmail !== userProfile.email) ? editEmail : undefined;
    Meteor.call('updateUserProfileDetails', editUser);
    template.editing.set(false);
  },
  'click .logout-button':function(event, template){
    event.preventDefault();
    console.log("Logout Pressed - add logout function");
    //Meteor.logout();
  }
});

Template.userAccount.helpers({
  'editing':function(){
    return Template.instance().editing.get();
  }
})

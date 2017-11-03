import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

Meteor.methods({
  'updateUserProfileDetails':function(options){
    if(!Match.test(options, Match.OneOf({}, null, undefined))){
      check(options, {name: Match.Maybe(String), email:Match.Maybe(String)});
      if(Match.test(options.name, String)){
        Meteor.users.update({_id:Meteor.userId()},{$set:{"profile.name":options.name}});
      }
      if(Match.test(options.email, String)){
        Meteor.users.update({_id:Meteor.userId()},{$set:{"profile.email":options.email}});
      }
    }

  }
});

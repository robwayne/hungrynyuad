import { Meteor } from 'meteor/meteor';

Meteor.publish('campaigns', function(){
  return Campaigns.find({});
});

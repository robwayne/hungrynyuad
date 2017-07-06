import { Meteor } from 'meteor/meteor';
import Campaigns from '/both/collections/campaigns.js';

Meteor.publish('campaigns', function(){
  return Campaigns.find({});
});

import { Meteor } from 'meteor/meteor';

Meteor.publish('restaurants', function(){
  return Restaurants.find({});
});

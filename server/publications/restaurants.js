import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.publish('restaurants', function(){
  return Restaurants.find({});
});

Meteor.publish('searchingRestaurants', function(search){
  check(search, Match.OneOf(String, null, undefined));

  let query = {};

  if(search){
    regex = new RegExp(search, 'i');

    query = {name:regex};
  }

  return Restaurants.find(query, {sort:{name:1}});


});

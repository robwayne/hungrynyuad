import { Meteor } from 'meteor/meteor';


Meteor.methods({
  'insertRestaurant':function(restaurant){
    Restaurants.insert(restaurant);
  }
});

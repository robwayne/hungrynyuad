import { Meteor } from 'meteor/meteor';
import { Match } from 'meteor/check';
import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'updateUserFavoriteRestaurants':function(restaurantId){
    const userFavoriteRestaurants = Meteor.user().profile.favorites.restaurant_ids;
    if(Match.test(restaurantId, String)){
      //check if the restaurant exists
      const restaurant = Restaurants.findOne({_id:restaurantId});
      if(restaurant != null){
        if(userFavoriteRestaurants.includes(restaurantId)){
          Meteor.users.update({_id:Meteor.userId()}, {$pull:{"profile.favorites.restaurant_ids":restaurantId}});
        } else {
          Meteor.users.update({_id:Meteor.userId()}, {$push:{"profile.favorites.restaurant_ids":restaurantId}});
        }
      } else { //throw error if the restaurant does not exist
        throw new Meteor.Error('restaurant-not-found', "Restaurant does not exist.");
      }

    } else { //throw error if the restaurant id is null or empty
      throw new Meteor.Error('invalid-restaurant-id', "Restaurant ID cannot be empty or null.");
    }
  }
});

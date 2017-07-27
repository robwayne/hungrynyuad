import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.favorites.onCreated(function(){
  Meteor.subscribe('restaurants');
});

Template.favorites.helpers({
  'restaurants':function(){
    return Restaurants.find({}, {sort:{name:1}});
  },
  'favorited':function(){
    const userFavoriteRestaurants = Meteor.user().profile.favorites.restaurant_ids;
    if(userFavoriteRestaurants.includes(this._id)){
      return true;
    }
    return false;
  }
});

Template.favorites.events({
  'click .favorite-button':function(event, template){
    console.log(this._id);
    Meteor.call('updateUserFavoriteRestaurants',this._id);
  }
})

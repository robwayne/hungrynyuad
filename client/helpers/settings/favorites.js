import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.favorites.onCreated(function(){
  template = Template.instance();
  template.searching = new ReactiveVar(false);
  template.searchQuery = new ReactiveVar();

  template.autorun(()=>{
    template.subscribe('searchingRestaurants', template.searchQuery.get(), ()=>{
      setTimeout(()=>{
        template.searching.set(false);
      },300);
    });
  });
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
  },
  'searching':function(){
    return Template.instance().searching.get();
  },
  'query':function(){
    return Template.instance().searchQuery.get();
  }
});

Template.favorites.events({
  'click .favorite-button':function(event, template){
    console.log(this._id);
    Meteor.call('updateUserFavoriteRestaurants',this._id);
  },

  'keyup .favorites-search':function(event,template){
    const value = event.target.value.trim();

    if(value !== ''){
      Template.instance().searchQuery.set(value);
      Template.instance().searching.set(true);
    }

    if(value === ''){
      Template.instance().searchQuery.set(value);
    }


  }
});
 

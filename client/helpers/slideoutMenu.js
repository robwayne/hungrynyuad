import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.slideoutMenu.onCreated(function(){
  Meteor.subscribe('restaurants');
});

Template.slideoutMenu.helpers({
  'restaurants': function(){
    return Restaurants.find({}, {sort:{name:1}});
  }
});

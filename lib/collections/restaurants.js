import { Mongo } from 'meteor/mongo';

 Restaurants = new Mongo.Collection('restaurants');

Restaurants.allow({
  insert(){
    return true;
  }
});

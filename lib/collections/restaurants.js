import { Mongo } from 'meteor/mongo';
import { Schemas } from '/lib/schemas/collectionSchemas.js';

 Restaurants = new Mongo.Collection('restaurants');

 //Restaurants.attachSchema(Schemas.Restaurants);

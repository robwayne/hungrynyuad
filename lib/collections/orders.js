import { Mongo } from 'meteor/mongo';

Orders = new Mongo.Collection('orders');

Orders.allow({
  insert(){
    return true;
  }
});

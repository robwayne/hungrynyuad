import { Meteor } from 'meteor/meteor';

Meteor.publish('defaultImages', function(){
  return defaultImages.find();
});

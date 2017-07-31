import { Meteor } from 'meteor/meteor';


const restaurantImageStore = new FS.Store.GridFS("restaurantImages");
restaurantImages = new FS.Collection("restaurantImages", {
  stores:[restaurantImageStore],
  filter:{
    allow:{
      contentTypes:['image/*']
    }
  }
});

restaurantImages.allow({
  'insert':function(){return true;},
  'update':function(){return true;},
  'remove':function(){return true;},
  'download': function(){return true;}
});

restaurantImages.deny({
  'insert':function(){return false;},
  'update':function(){return false;},
  'remove':function(){return false;},
  'download': function(){return false;}
});

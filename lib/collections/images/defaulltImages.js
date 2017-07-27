import { Meteor } from 'meteor/meteor';

const images = new FS.Store.GridFS("defaultImages");
defaultImages = new FS.Collection("defaultImages", {
  stores: [images],
  filter:{
    allow:{
      contentTypes:['image/*']
    }
  }
});

defaultImages.allow({
  'insert':function(){return true;},
  'update':function(){return true;},
  'remove':function(){return true;},
  'download': function(){return true;}
});

defaultImages.deny({
  'insert':function(){return false;},
  'update':function(){return false;},
  'remove':function(){return false;},
  'download': function(){return false;}
});

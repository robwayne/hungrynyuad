import { Meteor } from 'meteor/meteor';


const userImagesStore = new FS.Store.GridFS("userImages");
userImages = new FS.Collection("userImages",{
  stores: [
    userImagesStore
  ],
  filter:{
    allow:{
      contentTypes:['image/*']
    }
  }
});

userImages.deny({
  insert: function(){
    return false;
  },
  update:function(){
    return false;
  },
  remove:function(){
    return false;
  },
  download:function(){
    return false;
  }
});

userImages.allow({
  insert: function(){
    return true;
  },
  update:function(){
    return true;
  },
  remove:function(){
    return true;
  },
  download:function(){
    return true;
  }
});

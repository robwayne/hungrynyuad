import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


Template.imageupload.onCreated(function(){
  Meteor.subscribe('userimages');
});

Template.imageupload.helpers({
  'getUserProfilePic':function(){
    return userImages.find();
  },
  'getUserData':function(){
    return Meteor.user();
  }
})

Template.imageupload.events({
  'change #userpicfile'(event, template){
    event.preventDefault();
    FS.Utility.eachFile(event, (file) => {
      let fsFile = new FS.File(file);
      fsFile.owner = Meteor.userId();
      console.log(fsFile);
      userImages.insert(fsFile, function(err){
        if(err){
          console.log(err.reason || "Unknown error occurred while uploading image");
        }else {
          let imgUrl = "/cfs/files/images/"+fsFile._id;
          Meteor.call('updateUserProfilePicture', Meteor.userId(), imgUrl);
        }
      });
    });
  }
});

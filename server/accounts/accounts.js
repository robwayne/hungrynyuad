import { Meteor } from 'meteor/meteor';

Accounts.onCreateUser((options, user) => {
  let account_profile = {};
  if(!user.services.facebook){ //if the user is using password as their signup method
    profile = {
      name:options.name.replace(/\b\w/g, l => l.toUpperCase()), //Capitalize user's name
      email: options.email,
      avatar_url: null
    };
  }
  else if (user.services.facebook){ //else if user signs-up via facebook
    avatarUrl = "http://graph.facebook.com/"+user.services.facebook.id+"/picture?type=small"; //get user's facebook profile pic url
    profile = {
      name: user.services.facebook.name,
      email: user.services.facebook.email,
      avatar_url: avatarUrl,
    };
  }
  const favorites = {
    restaurant_ids:[],
    order_ids:[]
  };
  user.favorites = favorites;
  user.profile = profile;
  return user;
});

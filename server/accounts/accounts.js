import { Meteor } from 'meteor/meteor';

Accounts.onCreateUser((options, user) => {
  let account_profile = {};
  if(!user.services.facebook){ //if the user is using password as their signup method
    account_profile = {
      name:options.name.replace(/\b\w/g, l => l.toUpperCase()), //Capitalize user's name
      email: options.email,
      avatar_url: null
    };
  }
  else if (user.services.facebook){ //else if user signs-up via facebook
    avatarUrl = "http://graph.facebook.com/"+user.services.facebook.id+"/picture?type=small"; //get user's facebook profile pic url
    account_profile = {
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
  user.account_profile = account_profile;
  return user;
});

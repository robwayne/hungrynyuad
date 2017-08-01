import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

FlowRouter.route('/signin', {
  action:function(){
    BlazeLayout.render('signin');
  },
  name: 'Sign In'
});

FlowRouter.route('/test', {
  'action':function(){
    BlazeLayout.render('addRestaurants');
  }
});

FlowRouter.route('/splash', {
  action(){
    BlazeLayout.render('splashscreen');
  },
  name: 'Splash Screen'
});

FlowRouter.route(['/', '/home'], {
  action(){
    BlazeLayout.render('layout',{main:'fakelayout'});
  },
  name: 'Home'
});

FlowRouter.route('/trending', {
  action(){
    BlazeLayout.render('layout', {main:'trending'})
  },
  name: 'Trending Orders'
});

FlowRouter.route('/closing', {
  action(){
    BlazeLayout.render('layout', {main:'closing'});
  },
  name:'Closing Orders'
});

FlowRouter.route('/register', {
  action(){
    BlazeLayout.render('register');
  },
  name: 'Register'
});

const settingsRoutes = FlowRouter.group({
  prefix:'/settings',
  name: 'Settings'
});

settingsRoutes.route('/', {
  action(){
    BlazeLayout.render('settingsLayout',{main:'settings'});
  },
  name:'Settings'
});

profileRoute = settingsRoutes.group({
  prefix:'/profile',
  name:'Profile'
});

profileRoute.route('/', {
  action(){
    BlazeLayout.render('profileLayout', {main:'profile'});
  },
  name:'Profile'
});

profileRoute.route('/favorites', {
  action(){
    BlazeLayout.render('profileLayout', {main:'favorites'});
  },
  name: 'Favorites'
});

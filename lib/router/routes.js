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
    BlazeLayout.render('uploadDefaultImage');
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

settingsRoutes.route('/profile', {
  action(){
    BlazeLayout.render('settingsLayout', {main:'profile'});
  },
  name:'Profile'
});

settingsRoutes.route('/favorites', {
  action(){
    BlazeLayout.render('settingsLayout', {main:'favorites'});
  },
  name:'Favorites'
});

FlowRouter.route('/signin', {
  action:function(){
    BlazeLayout.render('signin');
  },
  name: 'Sign In'
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

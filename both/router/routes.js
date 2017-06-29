FlowRouter.route('/signin', {
  action:function(){
    BlazeLayout.render('signin');
  },
  name: 'Sign In'
});

FlowRouter.route('/splash', {
  action:function(){
    BlazeLayout.render('splashscreen');
  },
  name: 'Splash Screen'
});

FlowRouter.route(['/', '/home'], {
  action(){
    BlazeLayout.render('home');
  },
  name: 'Home'
});

FlowRouter.route('/register', {
  action(){
    BlazeLayout.render('register');
  },
  name: 'Register'
})

FlowRouter.route('/signin', {
  action:function(){
    BlazeLayout.render('signin');
  }
});

FlowRouter.route('/splash', {
  action:function(){
    BlazeLayout.render('splashscreen');
  }
});

FlowRouter.route(['/', '/home'], {
  action(){
    BlazeLayout.render('home');
  }
});

FlowRouter.route('/register', {
  action(){
    BlazeLayout.render('register');
  }
})

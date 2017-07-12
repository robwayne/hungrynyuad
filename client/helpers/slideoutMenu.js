Template.slideoutMenu.helpers({
  'restaurants': function(){
    return Restaurants.find({}, {sort:{name:1}});
  }
});

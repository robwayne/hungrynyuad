Template.slideoutMenu.helpers({
  restaurants(){
    return Restaurants.find({}, {sort:{name:1}});
  }
});

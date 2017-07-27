Template.addRestaurants.events({
  'change #restLogo'(event, template){
    event.preventDefault();

    const restaurantName = $('#restName').val().trim();
    const minTotal = parseFloat($('#restMin').val().trim());
    const restaurantPhone= $('#restPhone').val().trim();
    const restaurantWebsite = $('#restWebsite').val().trim();
    const restaurantAddress = $('#restAddress').val().trim();

    FS.Utility.eachFile(event, file => {
      restaurantImages.insert(file, function(err, fileObj){
        if(err){
          console.log(err);
        }else{
          const restaurantLogo = "/cfs/files/restaurantImages/"+fileObj._id;

          const restaurant = {
            name:restaurantName,
            banner_img_url:restaurantLogo,
            min_total:minTotal,
            contact_info:{
              phone:restaurantPhone,
              website:restaurantWebsite,
              address:restaurantAddress
            }
          };
          Meteor.call('insertRestaurant', restaurant);
        }
      });
    });
  }
})

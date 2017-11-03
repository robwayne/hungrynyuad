Meteor.startup(() => {

  if (Restaurants.find().count() === 0) {
    const dummyRestaurants = [
      {
        name : "Biryani Express",
        banner_img_url : "/images/biryaniexpress.png",
        min_total : 150,
        delivery_time: 60,
        contact_info : {
            phone : "971543042243",
            website : "https://kfc.ae",
            address : "Electra Street 6866 Abu Dhabi, United Arab Emirates"
        }
      },
      {
        name : "Burger King",
        banner_img_url : "/images/burgerking.png",
        min_total : 150,
        delivery_time: 60,
        contact_info : {
            phone : "971543042243",
            website : "https://kfc.ae",
            address : "Electra Street 6866 Abu Dhabi, United Arab Emirates"
        }
      },
      {
        name : "Cha Time",
        banner_img_url : "/images/chatime.jpg",
        min_total : 150,
        delivery_time: 60,
        contact_info : {
            phone : "971543042243",
            website : "https://kfc.ae",
            address : "Electra Street 6866 Abu Dhabi, United Arab Emirates"
        }
      },
      {
        name : "Hardee's",
        banner_img_url : "/images/hardees.jpg",
        min_total : 150,
        delivery_time: 60,
        contact_info : {
            phone : "971543042243",
            website : "https://kfc.ae",
            address : "Electra Street 6866 Abu Dhabi, United Arab Emirates"
        }
      },
      {
        name : "KFC",
        banner_img_url : "/images/kfc.png",
        min_total : 150,
        delivery_time: 60,
        contact_info : {
            phone : "971543042243",
            website : "https://kfc.ae",
            address : "Electra Street 6866 Abu Dhabi, United Arab Emirates"
        }
      },
      {
        name : "McDonald's",
        banner_img_url : "/images/mcdonalds.png",
        min_total : 150,
        delivery_time: 60,
        contact_info : {
            phone : "971543042243",
            website : "https://kfc.ae",
            address : "Electra Street 6866 Abu Dhabi, United Arab Emirates"
        }
      },
      {
        name : "Papa Murphy's",
        banner_img_url : "/images/papamurphys.png",
        min_total : 150,
        delivery_time: 60,
        contact_info : {
            phone : "971543042243",
            website : "https://kfc.ae",
            address : "Electra Street 6866 Abu Dhabi, United Arab Emirates"
        }
      },
      {
        name : "Pizza Hut",
        banner_img_url : "/images/pizzahut.png",
        min_total : 150,
        delivery_time: 60,
        contact_info : {
            phone : "971543042243",
            website : "https://kfc.ae",
            address : "Electra Street 6866 Abu Dhabi, United Arab Emirates"
        }
      },
      {
        name : "Popeyes",
        banner_img_url : "/images/popeyes.png",
        min_total : 150,
        delivery_time: 60,
        contact_info : {
            phone : "971543042243",
            website : "https://kfc.ae",
            address : "Electra Street 6866 Abu Dhabi, United Arab Emirates"
        }
      },
      {
        name : "Salt",
        banner_img_url : "/images/salt.png",
        min_total : 150,
        delivery_time: 60,
        contact_info : {
            phone : "971543042243",
            website : "https://kfc.ae",
            address : "Electra Street 6866 Abu Dhabi, United Arab Emirates"
        }
      },
      {
        name : "Subway",
        banner_img_url : "/images/subway.jpg",
        min_total : 150,
        delivery_time: 60,
        contact_info : {
            phone : "971543042243",
            website : "https://kfc.ae",
            address : "Electra Street 6866 Abu Dhabi, United Arab Emirates"
        }
      },
    ];
    for (restaurant of dummyRestaurants){
      Restaurants.insert(restaurant);
    }
  }

  if (Campaigns.find().count() === 0) {
    //Add Campaigns here if necessary
  }
});

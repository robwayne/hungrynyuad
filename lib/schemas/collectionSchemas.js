import SimpleSchema from 'simpl-schema';

const Schemas = {};

Schemas.Restaurants = new SimpleSchema({
  name: {
    type: String,
    label:"Restaurant Name",
    max:50,
  },
  banner_img_url: {
    type:String,
    label:'Restaurant Image',
    regEx: SimpleSchema.RegEx.Url,
  },
  min_total:{
    type: Number,
    label: 'Minimum of Total Orders',
    min:0
  },
  contact_info:{
    type: Object,
    label: 'Restaurant Contact Information'
  },
  "contact_info.phone": {
    type: String,
    label: "Restaurant's Phone Number",
    min:7
  },
  "contact_info.website_url": {
    type:String,
    label:"Restaurant's website",
    regEx: SimpleSchema.RegEx.Url,
    optional:true
  },
  "contact_info.address": {
    type:Object,
    label: 'Address of the restaurant',
    optional:true
  },
  "contact_info.address.street":{
    type:String,
    label: "Street address of the restaurant",
    max:100
  },
  "contact_info.address.city": {
    type:String,
    label: 'City',
    max:50,
  },
  "contact_info.address.emirate":{
    type:String,
    label: 'Emirate',
    max:30
  }

});

export { Schemas };

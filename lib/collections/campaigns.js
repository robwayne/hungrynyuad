import { Mongo } from 'meteor/mongo';

Campaigns = new Mongo.Collection('campaigns');

Campaigns.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Campaigns.deny({
  insert:()=>true,
  update:()=>true,
  remove:()=>true
});

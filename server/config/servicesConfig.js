import { ServiceConfiguration } from 'meteor/service-configuration';
import { Meteor } from 'meteor/meteor';

ServiceConfiguration.configurations.remove({
  service:"facebook"
});

ServiceConfiguration.configurations.insert({
  service:"facebook",
  appId:'1111881802245040',
  secret:'d51ba0becd60b4eba0b93679615f6bcd'
});

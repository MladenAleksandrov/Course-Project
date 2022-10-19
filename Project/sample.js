// const fs                     = require('fs');

// // как да вземем информация за произволен потребител в системата - подаваме конфигурационния му файл
// const socialNetworkProcessor = require('./src/processor.js');
// const object = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/normal/config.json`);

// object.addNewFriend();
// console.log(object.getAllFriends());
// object.removeExistingFriend();
// console.log(object.getAllFriends());



// object.addNewFriend();
// console.log(object.getAllFriends());
// object.removeExistingFriend();
// console.log(object.getAllFriends());


const fs                     = require('fs');

// как да вземем информация за произволен потребител в системата - подаваме конфигурационния му файл
const socialNetworkProcessor = require('./src/processor.js');

const accauntNormal     = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarious/normal/config.json`);
const accauntRestricted = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarius/restricted/config.json`);
const accauntVip        = socialNetworkProcessor.initConfig(`${__dirname}/test_scenarius/vip/config.json`);

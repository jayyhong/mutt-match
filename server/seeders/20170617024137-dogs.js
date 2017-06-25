'use strict';
const dbx = require('../utils/dbx');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return dbx.getLinks()
    .then(results => {
      results.entries.forEach((image, idx) => {
        dogsData[idx].imageLink = image.path_lower;
      });
      return queryInterface.bulkInsert('Dogs', dogsData);
    })
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

var dogsData = [{
  "id": 1,
  "name": "Sòng",
  "age": 6,
  "shelter": 6,
  "active": 3,
  "grooming": 2,
  "size": 5,
  "noise": 5,
  "experienceReq": false,
  "childFriendly": false,
  "dogFriendly": true,
  "petFriendly": true
}, {
  "id": 2,
  "name": "Pénélope",
  "age": 3,
  "shelter": 1,
  "active": 1,
  "grooming": 2,
  "size": 5,
  "noise": 2,
  "experienceReq": true,
  "childFriendly": true,
  "dogFriendly": false,
  "petFriendly": true
}, {
  "id": 3,
  "name": "Hélèna",
  "age": 6,
  "shelter": 5,
  "active": 2,
  "grooming": 2,
  "size": 1,
  "noise": 4,
  "experienceReq": false,
  "childFriendly": true,
  "dogFriendly": false,
  "petFriendly": true
}, {
  "id": 4,
  "name": "Pò",
  "age": 2,
  "shelter": 10,
  "active": 5,
  "grooming": 2,
  "size": 1,
  "noise": 3,
  "experienceReq": true,
  "childFriendly": false,
  "dogFriendly": false,
  "petFriendly": false
}, {
  "id": 5,
  "name": "Bérengère",
  "age": 2,
  "shelter": 7,
  "active": 1,
  "grooming": 2,
  "size": 4,
  "noise": 5,
  "experienceReq": false,
  "childFriendly": false,
  "dogFriendly": false,
  "petFriendly": false
}, {
  "id": 6,
  "name": "Fèi",
  "age": 1,
  "shelter": 10,
  "active": 2,
  "grooming": 3,
  "size": 1,
  "noise": 4,
  "experienceReq": false,
  "childFriendly": false,
  "dogFriendly": true,
  "petFriendly": false
}, {
  "id": 7,
  "name": "Agnès",
  "age": 5,
  "shelter": 3,
  "active": 4,
  "grooming": 4,
  "size": 1,
  "noise": 5,
  "experienceReq": false,
  "childFriendly": true,
  "dogFriendly": false,
  "petFriendly": true
}, {
  "id": 8,
  "name": "Célia",
  "age": 3,
  "shelter": 1,
  "active": 4,
  "grooming": 2,
  "size": 5,
  "noise": 1,
  "experienceReq": true,
  "childFriendly": true,
  "dogFriendly": true,
  "petFriendly": true
}, {
  "id": 9,
  "name": "Crééz",
  "age": 6,
  "shelter": 3,
  "active": 4,
  "grooming": 2,
  "size": 1,
  "noise": 5,
  "experienceReq": false,
  "childFriendly": false,
  "dogFriendly": false,
  "petFriendly": true
}, {
  "id": 10,
  "name": "Yénora",
  "age": 6,
  "shelter": 5,
  "active": 4,
  "grooming": 3,
  "size": 3,
  "noise": 3,
  "experienceReq": false,
  "childFriendly": true,
  "dogFriendly": false,
  "petFriendly": false
}, {
  "id": 11,
  "name": "Lyséa",
  "age": 6,
  "shelter": 3,
  "active": 3,
  "grooming": 1,
  "size": 3,
  "noise": 4,
  "experienceReq": true,
  "childFriendly": true,
  "dogFriendly": false,
  "petFriendly": false
}, {
  "id": 12,
  "name": "Nuó",
  "age": 6,
  "shelter": 4,
  "active": 2,
  "grooming": 4,
  "size": 5,
  "noise": 1,
  "experienceReq": false,
  "childFriendly": true,
  "dogFriendly": true,
  "petFriendly": false
}, {
  "id": 13,
  "name": "Thérèse",
  "age": 8,
  "shelter": 3,
  "active": 3,
  "grooming": 1,
  "size": 1,
  "noise": 5,
  "experienceReq": false,
  "childFriendly": false,
  "dogFriendly": false,
  "petFriendly": false
}, {
  "id": 14,
  "name": "Amélie",
  "age": 6,
  "shelter": 10,
  "active": 4,
  "grooming": 3,
  "size": 4,
  "noise": 5,
  "experienceReq": false,
  "childFriendly": true,
  "dogFriendly": false,
  "petFriendly": false
}, {
  "id": 15,
  "name": "Marie-hélène",
  "age": 1,
  "shelter": 9,
  "active": 1,
  "grooming": 5,
  "size": 3,
  "noise": 1,
  "experienceReq": true,
  "childFriendly": true,
  "dogFriendly": true,
  "petFriendly": false
}, {
  "id": 16,
  "name": "Kallisté",
  "age": 9,
  "shelter": 4,
  "active": 5,
  "grooming": 2,
  "size": 1,
  "noise": 1,
  "experienceReq": true,
  "childFriendly": true,
  "dogFriendly": false,
  "petFriendly": false
}, {
  "id": 17,
  "name": "Mà",
  "age": 6,
  "shelter": 3,
  "active": 4,
  "grooming": 2,
  "size": 2,
  "noise": 2,
  "experienceReq": true,
  "childFriendly": false,
  "dogFriendly": false,
  "petFriendly": false
}, {
  "id": 18,
  "name": "Cléopatre",
  "age": 2,
  "shelter": 2,
  "active": 1,
  "grooming": 2,
  "size": 2,
  "noise": 4,
  "experienceReq": true,
  "childFriendly": false,
  "dogFriendly": true,
  "petFriendly": true
}, {
  "id": 19,
  "name": "Dà",
  "age": 1,
  "shelter": 2,
  "active": 5,
  "grooming": 2,
  "size": 2,
  "noise": 5,
  "experienceReq": true,
  "childFriendly": true,
  "dogFriendly": true,
  "petFriendly": false
}, {
  "id": 20,
  "name": "Eléonore",
  "age": 6,
  "shelter": 4,
  "active": 5,
  "grooming": 2,
  "size": 3,
  "noise": 4,
  "experienceReq": true,
  "childFriendly": false,
  "dogFriendly": false,
  "petFriendly": true
}, {
  "id": 21,
  "name": "Angèle",
  "age": 3,
  "shelter": 5,
  "active": 3,
  "grooming": 1,
  "size": 2,
  "noise": 1,
  "experienceReq": false,
  "childFriendly": true,
  "dogFriendly": true,
  "petFriendly": false
}, {
  "id": 22,
  "name": "Börje",
  "age": 3,
  "shelter": 4,
  "active": 2,
  "grooming": 3,
  "size": 1,
  "noise": 4,
  "experienceReq": false,
  "childFriendly": true,
  "dogFriendly": true,
  "petFriendly": false
}, {
  "id": 23,
  "name": "Maïly",
  "age": 6,
  "shelter": 7,
  "active": 1,
  "grooming": 1,
  "size": 4,
  "noise": 3,
  "experienceReq": true,
  "childFriendly": false,
  "dogFriendly": true,
  "petFriendly": true
}, {
  "id": 24,
  "name": "Adèle",
  "age": 2,
  "shelter": 8,
  "active": 4,
  "grooming": 3,
  "size": 3,
  "noise": 1,
  "experienceReq": false,
  "childFriendly": false,
  "dogFriendly": true,
  "petFriendly": true
}, {
  "id": 25,
  "name": "Cléopatre",
  "age": 3,
  "shelter": 5,
  "active": 1,
  "grooming": 2,
  "size": 1,
  "noise": 4,
  "experienceReq": false,
  "childFriendly": false,
  "dogFriendly": false,
  "petFriendly": true
}, {
  "id": 26,
  "name": "Méghane",
  "age": 6,
  "shelter": 4,
  "active": 2,
  "grooming": 3,
  "size": 3,
  "noise": 3,
  "experienceReq": false,
  "childFriendly": false,
  "dogFriendly": false,
  "petFriendly": false
}, {
  "id": 27,
  "name": "Noémie",
  "age": 7,
  "shelter": 1,
  "active": 4,
  "grooming": 4,
  "size": 3,
  "noise": 2,
  "experienceReq": false,
  "childFriendly": false,
  "dogFriendly": true,
  "petFriendly": false
}, {
  "id": 28,
  "name": "Séréna",
  "age": 3,
  "shelter": 2,
  "active": 2,
  "grooming": 3,
  "size": 3,
  "noise": 3,
  "experienceReq": false,
  "childFriendly": false,
  "dogFriendly": false,
  "petFriendly": false
}, {
  "id": 29,
  "name": "Marie-josée",
  "age": 11,
  "shelter": 9,
  "active": 2,
  "grooming": 1,
  "size": 5,
  "noise": 3,
  "experienceReq": true,
  "childFriendly": true,
  "dogFriendly": true,
  "petFriendly": true
}, {
  "id": 30,
  "name": "Nuó",
  "age": 4,
  "shelter": 3,
  "active": 5,
  "grooming": 2,
  "size": 5,
  "noise": 1,
  "experienceReq": false,
  "childFriendly": false,
  "dogFriendly": true,
  "petFriendly": false
}];
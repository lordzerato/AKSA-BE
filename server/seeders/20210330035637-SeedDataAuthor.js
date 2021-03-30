'use strict';

const dataSeeding = require('../datas/authors.json').map(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
  return el
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Authors', dataSeeding)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Authors', null, {})
  }
};

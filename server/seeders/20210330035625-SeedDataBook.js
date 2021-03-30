'use strict';

const dataSeeding = require('../datas/books.json').map(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
  return el
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', dataSeeding)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {})
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('registered_users', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'demo@demo.com',
        phone: '8197510162',
        ageGroup: '18',
        vaccine: 'COWAXIN',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});


  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('registered_users', null, {});
  }
};

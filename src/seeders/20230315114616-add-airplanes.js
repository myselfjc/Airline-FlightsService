'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

  //   await queryInterface.bulkInsert('Airplanes',[
  //     {
  //       model_number : "Airbus A300",
  //       capacity: 180,
  //       createdAt: new Date(),
  //       updatedAt: new Date()
  //     },
  //     {
  //       model_number : "Airbus A319neo",
  //       capacity: 90,
  //       createdAt: new Date(),
  //       updatedAt: new Date()
  //     },
  //     {
  //       model_number : "Boeing 747",
  //       capacity: 270,
  //       createdAt: new Date(),
  //       updatedAt: new Date()
  //     },
  //   ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

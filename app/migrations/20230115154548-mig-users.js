"use strict";
const {UUID4} = require("uuid")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      password: {
        type: Sequelize.TEXT,
      },
    });
  },

  async n(queryInterface, Sequelize) {
    await queryInterface.dropTable("users", null, {});
  },
};

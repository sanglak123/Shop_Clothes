"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Productions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      idCate: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categorys",
          key: "id",
        },
      },
      idCollect: {
        type: Sequelize.INTEGER,
        references: {
          model: "Collections",
          key: "id",
        },
      },
      idImg: {
        type: Sequelize.INTEGER,
        references: {
          model: "Imgs",
          key: "id",
        },
      },
      rating: {
        type: Sequelize.FLOAT,
      },
      price: {
        type: Sequelize.STRING,
      },
      color: {
        type: Sequelize.STRING,
      },
      size: {
        type: Sequelize.STRING,
      },
      weight: {
        type: Sequelize.STRING,
      },
      dimension: {
        type: Sequelize.STRING,
      },
      desc: {
        type: Sequelize.STRING,
      },
      sku: {
        type: Sequelize.STRING,
      },
      order: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Productions");
  },
};

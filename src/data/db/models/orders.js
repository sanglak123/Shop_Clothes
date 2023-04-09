"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, { foreignKey: "idUser" });
      this.belongsTo(models.Productions, { foreignKey: "idPrd" });
    }
  }
  Orders.init(
    {
      idUser: DataTypes.INTEGER,
      idPrd: DataTypes.INTEGER,
      count: DataTypes.INTEGER,
      size: DataTypes.STRING,
      color: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};

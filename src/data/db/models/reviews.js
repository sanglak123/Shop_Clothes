"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Productions, { foreignKey: "idPrd" });
    }
  }
  Reviews.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      rating: DataTypes.FLOAT,
      desc: DataTypes.TEXT,
      idPrd: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Reviews",
    }
  );
  return Reviews;
};

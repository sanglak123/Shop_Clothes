"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Collections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Imgs, { foreignKey: "idImg" });

      this.hasMany(models.Productions, { foreignKey: "idCollect" });
    }
  }
  Collections.init(
    {
      name: DataTypes.STRING,
      idImg: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Collections",
    }
  );
  return Collections;
};

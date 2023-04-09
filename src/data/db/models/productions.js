"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Productions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Orders, { foreignKey: "idPrd" });
      this.hasMany(models.Reviews, { foreignKey: "idPrd" });

      this.belongsTo(models.Categorys, { foreignKey: "idCate" });
      this.belongsTo(models.Collections, { foreignKey: "idCollect" });
      this.belongsTo(models.Imgs, { foreignKey: "idImg" });
    }
  }
  Productions.init(
    {
      name: DataTypes.STRING,
      idCate: DataTypes.INTEGER,
      idCollect: DataTypes.INTEGER,
      idImg: DataTypes.INTEGER,
      rating: DataTypes.FLOAT,
      price: DataTypes.STRING,
      color: DataTypes.STRING,
      size: DataTypes.STRING,
      weight: DataTypes.STRING,
      dimension: DataTypes.STRING,
      desc: DataTypes.STRING,
      sku: DataTypes.STRING,
      order: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Productions",
    }
  );
  return Productions;
};

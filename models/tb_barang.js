'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_barang.init({
    kodeBarang: DataTypes.INTEGER,
    namaBarang: DataTypes.STRING,
    jenisBarang: DataTypes.STRING,
    hargaBarang: DataTypes.INTEGER,
    idAdmin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_barang',
  });
  return tb_barang;
};
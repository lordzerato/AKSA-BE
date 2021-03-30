'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      Author.hasMany(models.Book, {
        foreignKey: "authorId"
      })
    }
  };
  Author.init({
    Id: DataTypes.UUID,
    Name: DataTypes.STRING,
    Age: DataTypes.INTEGER,
    Description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};
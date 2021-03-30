'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.Author, {
        foreignKey: "authorId"
      })
    }
  };
  Book.init({
    Id: DataTypes.UUID,
    authorId: DataTypes.UUID,
    Title: DataTypes.STRING,
    ReleaseYear: DataTypes.INTEGER,
    Description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
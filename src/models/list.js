'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      List.belongsTo(models.User, { foreignKey: 'UserId' });
      List.belongsTo(models.UserList, { foreignKey: 'UserListId' });
    }
  };
  List.init({
    title: DataTypes.STRING,
    price: {
      type: DataTypes.INTEGER,
      validate: {
        isBelowZero (value) {
          if (value < 0) throw new Error('Minimal value is 0');
        }
      }
    },
    isDone: DataTypes.BOOLEAN,
    LID: { type: DataTypes.STRING, unique: true },
    UserId: DataTypes.INTEGER,
    UserListId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate (list) {
        const dateString = new Date().toISOString();

        const dateFront = dateString.split("T")[0].split("-").join("");
        const dateBack = parseFloat(dateString.split("T")[1].split(":")[2])
          .toFixed(2)
          .split(".")
          .join("");

        const dateBackDone = dateBack.length < 4 ? `0${dateBack}` : `${dateBack}`;

        list.LID = 'L' + dateFront + dateBackDone;
        !list.price ? 0 : list.price;
        !list.isDone ? false : list.isDone;
      }
    },
    sequelize,
    modelName: 'List',
  });
  return List;
};
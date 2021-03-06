'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      UserList.belongsTo(models.User, { foreignKey: 'UserId' });
    }
  };
  UserList.init({
    name: DataTypes.STRING,
    currency: DataTypes.STRING,
    date: DataTypes.DATE,
    color: DataTypes.STRING,
    ULID: { type: DataTypes.STRING, unique: true },
    UserId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate (userlist) {
        const dateString = new Date().toISOString();

        const day = new Date().getDay();
        const dateFront = dateString.split("T")[0].split("-").join("");
        const dateBack = parseFloat(dateString.split("T")[1].split(":")[2])
          .toFixed(2)
          .split(".")
          .join("");

        const dateBackDone = dateBack.length < 4 ? `0${dateBack}` : `${dateBack}`;

        userlist.ULID = day + dateFront + dateBackDone;
      }
    },
    sequelize,
    modelName: 'UserList',
  });
  return UserList;
};
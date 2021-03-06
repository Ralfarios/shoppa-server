'use strict';
const { hashPass } = require('../helpers/bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      User.hasMany(models.UserList, { foreignKey: 'UserId' });
    }
  };
  User.init({
    UID: { type: DataTypes.STRING, unique: true },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email is required!'
        },
        isEmail: {
          args: true,
          msg: 'Email is invalid!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'You need password for security reason.'
        },
        len: {
          args: [4, 50],
          msg: 'Minimal and maximal password length is 4 - 50 characters'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username is required!'
        },
        notContains: {
          args: '@',
          msg: '\'@\' symbol is prohibited'
        },
        len: {
          args: [6, 16],
          msg: 'Username characters atleast 6 - 16 length'
        },
        isWhiteSpace (value) {
          if (value.split(' ').length > 1) throw new Error('Whitespace is prohibited');
        }
      }
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please insert your name!'
        }
      }
    },
    lastname: DataTypes.STRING,
    profpic: { type: DataTypes.STRING, allowNull: false },
    currency: { type: DataTypes.STRING, allowNull: false },
    locales: { type: DataTypes.STRING, allowNull: false }
  }, {
    hooks: {
      beforeCreate (user) {
        const dateString = new Date().toISOString();

        const dateFront = dateString.split("T")[0].split("-").join("");
        const dateBack = parseFloat(dateString.split("T")[1].split(":")[2])
          .toFixed(2)
          .split(".")
          .join("");

        const dateBackDone = dateBack.length < 4 ? `0${dateBack}` : `${dateBack}`;

        user.UID = dateFront + dateBackDone;
        user.password = hashPass(user.password);
        !user.lastname ? user.lastname = user.firstname : user.lastname;
        !user.profpic ? user.profpic = `https://ui-avatars.com/api/?name=${user.username}&background=random&length=1&bold=true&color=ffffff` : user.profpic;
        !user.currency ? user.currency = 'USD' : user.currency;
        !user.locales ? user.locales = 'en-US' : user.locales;
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};
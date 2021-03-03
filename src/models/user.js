'use strict';
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
      // define association here
    }
  };
  User.init({
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
      allowNull: false,
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
    firstname: { type: DataTypes.STRING, allowNull: false },
    lastname: { type: DataTypes.STRING, allowNull: false },
    currency: DataTypes.STRING,
    locales: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
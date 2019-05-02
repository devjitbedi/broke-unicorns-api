const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('users', {
  id: {
    field: 'id',
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  username: {
    field: 'username',
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Username is required'
      }
    }
  }, 
  password: {
    field: 'password',
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Password is required'
      }
    }
  }, 
  type: {
    field: 'type',
    type: Sequelize.STRING,
  }
}, 
{
  timestamps: false,
  freezeTableName: true
});
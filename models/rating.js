const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('rating', {
  id: {
    field: 'id',
    type: Sequelize.INTEGER,
    primaryKey: true
  },
   userID: {
    field: 'userID',
    type: Sequelize.INTEGER,
    validate: {
      isNumeric: {
        args: true,
        msg: 'UserID needs to be a number'
      }
    }
    
  },
   companyID: {
    field: 'companyID',
    type: Sequelize.INTEGER,
    validate: {
      isNumeric: {
        args: true,
        msg: 'CompanyID needs to be a number'
      }
    }
    
  },
   rating: {
    field: 'rating',
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Rating is required'
      }
    }
    
  },
   createTime: {
    field: 'createTime',
    type: Sequelize.DATE,
  }
}, 
{
  timestamps: false,
  freezeTableName: true
});
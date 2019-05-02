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
   content: {
    field: 'content',
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Content is required'
      }
    }
    
  },
   createTime: {
    field: 'createTime',
    type: Sequelize.DATE,
  },
  archived: {
    field: 'archived',
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Archived is required'
      }
    }
  }

}, 
{
  timestamps: false,
  freezeTableName: true
});
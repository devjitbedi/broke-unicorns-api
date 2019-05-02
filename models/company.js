const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('company', {
  id: {
    field: 'id',
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    field: 'name',
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Name is required'
      }
    }
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
  createTime: {
    field: 'createTime',
    type: Sequelize.DATE,
  }, 
  description: {
    field: 'description',
    type: Sequelize.STRING,
    validate: {
       max: {
        args:[200],
        msg:"Maximum 200 characters required in description"
      }
    }
  }, 
  content: {
    field: 'content',
    type: Sequelize.STRING,
    validate: {
       min: {
        args:[100],
        msg:"Minimum 100 characters required in content"
      }
    }
  }, 
  logoURL: {
    field: 'logoURL',
    type: Sequelize.STRING,
  }, 
  industryID: {
    field: 'industryID',
    type: Sequelize.INTEGER,
    validate: {
      isNumeric: {
        args: true,
        msg: 'IndustryID needs to be a number'
      }
    }
    
  }, 
  categoryID: {
    field: 'categoryID',
    type: Sequelize.INTEGER,
    validate: {
      isNumeric: {
        args: true,
        msg: 'CategoryID needs to be a number'
      }
    }
    
  }, 
  status: {
    field: 'status',
    type: Sequelize.INTEGER,
    validate: {
      isNumeric: {
        args: true,
        msg: 'Status needs to be a number'
      }
    }
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
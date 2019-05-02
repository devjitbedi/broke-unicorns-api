const express = require('express');
const bodyParser = require('body-parser');
const Company = require('./models/company');
const User = require('./models/users');
const Rating = require('./models/rating');
const Comment = require('./models/comment');
const Sequelize = require('sequelize');

const { Op } = Sequelize;
const app = express();

app.use(bodyParser.json());

Company.belongsTo(User, {
  foreignKey: 'userID',
});

User.hasMany(Company, {
  foreignKey: 'id'
});

Company.hasMany(Comment, {
  foreignKey: 'id'
});

Rating.belongsTo(Company, {
  foreignKey: 'companyID'
});

Rating.belongsTo(User, {
  foreignKey: 'userID'
});

User.hasMany(Rating, {
  foreignKey: 'id'
});

Comment.belongsTo(Company, {
  foreignKey: 'companyID'
});

User.hasMany(Comment, {
  foreignKey: 'id'
});

Comment.belongsTo(User, {
  foreignKey: 'userID'
});

//Endpoint for getting all companies
app.get('/api/company', function(request, response) {

  Company.findAll().then((company) => {
    response.json(company);
  });

});

//Endpoint for single company
app.get('/api/company/:id', function(request, response) {

  let { id } = request.params;

  Company.findByPk(id).then((company) => {
    if (company) {
      response.json(company);
    } else {
      response.status(404).send();
    }
  });
});

//Endpoint to create user
app.post('/api/user/new', async function(request, response) {

  try {

  let user =  await User.create({
    username: request.body.username,
    password: request.body.password,
    type: request.body.type
  })

  response.json(user);
  } catch(validation) {
    response.status(422).json({
      errors: validation.errors.map((error) => {
        return {
          attribute: error.path,
          message: error.message
        };
      })
    });
  }
});

//Update company status
app.patch('/api/company/:id', async function(request, response) {
  let { id } = request.params;

try {
      
      let company = await Company.findByPk(id);
      
      if (company) {

        await company.update(
          {status: request.body.status});

        response.json(company);
        response.status(200).send();

      } else {

          response.status(404).send();

      }

    } catch(validation) {
    response.status(422).json({
      errors: validation.errors.map((error) => {
        return {
          attribute: error.path,
          message: error.message
        };
      })
    });
  }

});

//Delete comment
app.delete('/api/comment/:id', function(request, response) {
  
  let { id } = request.params;
 
  Comment
    .findByPk(id)
    

    .then((comment) => {
      if (comment) {

          return comment.destroy();

      } else {
        return Promise.reject();
      }
    })
    .then(() => {
      response.status(204).send();
    }, () => {
      response.status(404).send();
    })
});


app.listen(process.env.PORT || 7000);
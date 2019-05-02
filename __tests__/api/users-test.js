const frisby = require('frisby');

const { Joi } = frisby;

// ENDPOINT 3

it('should create a user', () => {
  return frisby
    .post('http://localhost:7000/api/user/new', {
      username: 'dtang',
      password: '1234',
      type: 'default'

    })
    .expect('status', 200)
    .expect('json', 'username', 'dtang')
    .expect('json', 'password', '1234')
    .expect('json', 'type', 'default');
});

it('should not create a user and return validation issues', () => {
  return frisby
    .post('http://localhost:7000/api/user/new', {
      username: '',
      password: '',
      type: 'default'

    })
    .expect('status', 422);
});
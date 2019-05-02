const frisby = require('frisby');

const { Joi } = frisby;

// ENDPOINT 1

it('should return the a status of 200 when all companies are found', () => {

return frisby
.get('http://localhost:7000/api/company')
.expect('status',200);

});


//ENDPOINT 2

it('should return a status of 200 when the company is found', () => {

return frisby
.get('http://localhost:7000/api/company/8')
.expect('status',200);

});

it('should return a status of 404 when the company is not found', () => {

return frisby
.get('http://localhost:7000/api/company/-1')
.expect('status',404);

});



// ENDPOINT 4

it('should return a status of 200 when the company is updated', () => {

return frisby
.patch('http://localhost:7000/api/company/8', {
      status: 2
    })
.expect('json', 'status', 2)
.expect('status',200);

});



it('should return a status of 422 when the company is not updated properly', async () => {

				try {
					return frisby
					.patch('http://localhost:7000/api/company/8', {
							"status": "hi"
							})

				} catch(error) {

					expect(error.errors[0].message).to.equal('Status needs to be a number')
					.expect('status',422);
				}

				});
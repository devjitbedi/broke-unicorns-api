const frisby = require('frisby');


// ENDPOINT 5

it('should return a 204 when deleting a comment that exists', () => {

return frisby
.del('http://localhost:7000/api/comment/30')
.expect('status',204);

});


it('should return a 404 when deleting a comment that does not exist', () => {

return frisby
.del('http://localhost:7000/api/comment/-1')
.expect('status',404);

});
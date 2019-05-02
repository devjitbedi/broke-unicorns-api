const { expect } = require('chai');
const Company = require('./../../../models/company');

				// 5 unit tests

				it('should have a name that is not null', async () => {

				try {
				let company = new Company({name: null});
				await company.validate();

				} catch(error) {

					expect(error.errors[0].message).to.equal('Name is required');
				}

				});



				it('should have a userID that is a number', async () => {

				try {
				let company = new Company({userID: 'ab'});
				await company.validate();

				} catch(error) {

					expect(error.errors[0].message).to.equal('UserID needs to be a number');
				}

				});

				it('should have a description no more than 200 characters', async () => {

				try {
				let company = new Company({description: 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello'});
				await company.validate();

				} catch(error) {

					expect(error.errors[0].message).to.equal('Maximum 200 characters required in description');
				}

				});

				it('should have a content atleast 100 characters', async () => {

				try {
				let company = new Company({content: 'hello'});
				await company.validate();

				} catch(error) {

					expect(error.errors[0].message).to.equal('Minimum 100 characters required in content');
				}

				});

				it('should have a status that is a number', async () => {

				try {
				let company = new Company({status: 'ab'});
				await company.validate();

				} catch(error) {

					expect(error.errors[0].message).to.equal('Status needs to be a number');
				}

				});



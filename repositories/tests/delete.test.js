const {expect} = require('chai');
const booksRepository = require('../booksRepository')
const db= require('../../db');
const { ObjectID } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;


describe('booksRepository.update', () => {
    beforeAll( async () => {
        await db.connect();
    });

    afterAll( async () => {
        await db.disconnect();
    });
//not working not sure why. 
it('should return result when update the existing shop item', async () => {
    const result = await booksRepository.deleteById("5ef83e007c694b4d68c9352f") 

    expect(modifiedCount).to.equal(1);

});
});


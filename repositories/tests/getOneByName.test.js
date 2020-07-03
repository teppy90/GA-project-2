const { expect } = require('chai');

const authorsRepository = require('../authorsRepository');
const db = require('../../db');

describe('authorsRepository.getOneByName', () => {
    beforeAll(async () => {
        await db.connect();
    });

    afterAll(async () => {
        await db.disconnect();
    });

    fit('should return an object', async () => {
        const beans = await authorsRepository.getOneByName('Beans');
        expect(beans).to.be.an('object');
    });

    it('should return the object, ignoring case sensitivity', async () => {
        const beans = await authorsRepository.getOneByName('beans');
        expect(beans.name).to.equal('Beans');
    });

    it('should throw an error if the item cannot be found', async () => {
        try {
            await authorsRepository.getOneByName('banana');
            throw new Error('test should have thrown an error');
        } catch (err) {
            expect(err.message).to.equal('Item with name \'banana\' does not exist');
        }
    });
});
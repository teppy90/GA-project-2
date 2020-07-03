const { expect } = require('chai');

const authorsRepository = require('../authorsRepository');
const db = require('../../db');

describe('authorsRepository.getAll', () => {
    beforeAll(async () => {
        await db.connect();
    });
    
    afterAll(async () => {
        await db.disconnect();
    });
    
    it('should return an array', async () => {
        const shopItems = await authorsRepository.getAll();
        expect(shopItems).to.be.an('array');
    });

    it('should return an array of shop items, and one of the items should be "Beans"', async () => {
        const shopItems = await authorsRepository.getAll();
        const beans = shopItems.find(item => item.name === 'Beans');
        expect(beans.name).to.equal('Beans');
    });

    it('should return all multiple items',  async () => {
        const shopItems = await authorsRepository.getAll();
        expect(shopItems.length).to.be.greaterThan(0);
    });
});
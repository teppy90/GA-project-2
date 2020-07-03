const {expect} = require('chai');
const usersRepo = require('../usersRepo')
const db= require('../../db');

describe('create()', () => {
    beforeAll( async () => {
        await db.connect();
    });

    afterAll( async () => {
        await db.disconnect();
    });

    it ('it should find superman and push object with title and description ', async () => {
        const data = await usersRepo.update('apple1',
        {title: 'friday',
        description: 'went out'}
            );
            console.log(data)
            expect(data.entries[0].title).to.be.equal('friday')

    })
});


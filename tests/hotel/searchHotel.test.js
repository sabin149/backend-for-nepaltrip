const Hotels = require('../../model/hotelModel');
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/nepaltriptest';

beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});
afterAll(async () => {
    await mongoose.connection.close();
});

describe('Test for Hotel Schema', () => {
    it('Test for Search Hotels',async () => {
        const res= await Hotels.find({
            address:"Pokhara"
        });
        expect(res.ok);
    });

});

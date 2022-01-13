const { User } = require('../models');

const userdata = [
    {
        username: 'eddie',
        password: 'password'
    },
    {
        username: 'john',
        password: 'password'
    },
    {
        username: 'mark',
        password: 'password'
    },
];

const seedUser = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUser;
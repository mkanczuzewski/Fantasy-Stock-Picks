const { User } = require('../models');

const userdata = [
    {
        username: 'Eddie',
        password: 'password'
    },
    {
        username: 'John',
        password: 'password'
    },
    {
        username: 'Mark',
        password: 'password'
    },
];

const seedUser = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUser;
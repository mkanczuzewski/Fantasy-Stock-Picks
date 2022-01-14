const seedUser = require('./user-seeds');
const seedPost = require('./post-seeds');
const seedComment = require('./comment-seeds');
const seedAccount = require('./account-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUser();
    console.log('\n----- USERS SEEDED -----\n');

    await seedPost();
    console.log('\n----- POSTS SEEDED -----\n');
    
    await seedComment();
    console.log('\n----- COMMENTS SEEDED -----\n');

    await seedAccount();
    console.log('\n----- ACCOUNTS SEEDED -----\n');

    process.exit(0);
};

seedAll();
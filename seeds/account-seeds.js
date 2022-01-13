const { Account } = require('../models');

const accountData = [
    {
        stock_name: 'Apple',
        stock_price: 173.56,
        shares: 10,
        user_id: 1,
    },
    {
        stock_name: 'GameStop Corp.',
        stock_price: 123.58,
        shares: 20,
        user_id: 1,
    },
    {
        stock_name: 'General Motors',
        stock_price: 62.60,
        shares: 15,
        user_id: 1,
    },
    {
        stock_name: 'Microsoft',
        stock_price: 309.42,
        shares: 10,
        user_id: 2,
    },
    {
        stock_name: 'Sony Group Corp',
        stock_price: 125.07,
        shares: 10,
        user_id: 2,
    },
    {
        stock_name: 'Ford',
        stock_price: 25.33,
        shares: 100,
        user_id: 2,
    },
    {
        stock_name: 'IBM',
        stock_price: 135.10,
        shares: 10,
        user_id: 3,
    },
    {
        stock_name: 'Activision Blizzard, Inc.',
        stock_price: 64.34,
        shares: 50,
        user_id: 3,
    },
    {
        stock_name: 'Fiat Chrysler Automobiles',
        stock_price: 12.69,
        shares: 200,
        user_id: 3,
    },
]

const seedAccount = () => Account.bulkCreate(accountData);

module.exports = seedAccount;




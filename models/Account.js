const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create Account model
class Account extends Model {}

//create fields/columns for Account model
Post.init(
    {
      id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        stock_name: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        stock_price: { 
            type: DataTypes.DECIMAL(9,2),
            allowNull: false
        },
        shares: { 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
        }
    },
    {
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
);

module.exports = Account;
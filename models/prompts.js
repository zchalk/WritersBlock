const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Prompts extends Model {}

Prompts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    prompt_title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    prompt_text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'prompts',
  }
);

module.exports = Prompts;
const sequelize = require('../config/connection');
const { User, Prompts } = require("../models");

const userData = require('./userData.json');
const promptData = require('./promptData.json');
// const blogData = require('./blogData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const prompts = await Prompts.bulkCreate(promptData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

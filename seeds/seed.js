const sequelize = require('../config/connection');
const { User, Prompts } = require("../models");

const userData = require('./userData.json');
const promptData = require('./promptData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of promptData) {
    await Prompts.create({
      ...prompts,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();

const sequelize = require('../config/connection');
const { User, Prompts, Blogs } = require("../models");

const userData = require('./userData.json');
const promptData = require('./promptData.json');
const blogData = require('./blogData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const prompts = await Prompts.bulkCreate(promptData, {
    returning: true,
  });

  const blogs = await Blogs.bulkCreate(blogData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

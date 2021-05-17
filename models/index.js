const Prompts = require('./prompts');
const User = require('./user');
const Blogs = require('./blogs');

User.hasMany(Blogs, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Prompts.hasMany(Blogs, {
    foreignKey: 'prompt_id',
    onDelete: 'CASCADE'
});

Blogs.belongsTo(User, {
    foreignKey: 'user_id'
});

Blogs.belongsTo(Prompts, {
    foreignKey: 'prompt_id'
});

module.exports = {Prompts, User, Blogs};
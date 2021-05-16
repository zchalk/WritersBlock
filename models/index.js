const Prompts = require('./prompts');
const User = require('./user');
const Blogs = require('./blogs');

User.hasMany(Blogs, {
    foreignKey: 'user_id',
    // foreignKey: 'prompts_id',
    onDelete: 'CASCADE'
});

Blogs.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {Prompts, User, Blogs};
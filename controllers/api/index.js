const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPost = require('./blogpost');

router.use('/users', userRoutes);
router.use('/blogposts', blogPost);

module.exports = router;

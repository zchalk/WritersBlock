const router = require('express').Router();
const { Prompts } = require('../../models');
const { Blogs } = require('../../models');

router.post('/', async (req, res) => {
    try {
        // use sequelize to create a new psot and enter into the table
         const newBlog = await Blogs.create({
            blog_text: req.body.blog
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
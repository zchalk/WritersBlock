const router = require('express').Router();
const { Prompts } = require('../../models');
const { Blogs } = require('../../models');

router.post('/', async (req, res) => {
    try {
         const newBlog = await Blogs.create({
            blog_text: req.body.blog,
            user_id: req.session.userID,
            prompt_id: req.body.prompt_id
        });

    } catch (err) {
        res.status(400).json(err);
    }
});
router.post('/prompt', async (req, res) => {
    try {
         const newPrompt = await Prompts.create({
            prompt_title: req.body.prompt_title,
            prompt_text: req.body.prompt_text
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
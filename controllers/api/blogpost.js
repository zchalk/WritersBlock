const router = require('express').Router();
const { Prompts } = require('../../models');

router.post('/', async (req, res) => {
    try {
        // use sequelize to create a new psot and enter into the table
        // const blog = await Prompts.create(req.body);
        console.log(req.body);
    } catch (err) {
        res.status(400).json(err);
    }
});
module.exports = router;
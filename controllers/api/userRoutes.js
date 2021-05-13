const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userStuff = await User.create(req.body);

        req.session.save(() => {
            req.session.userID = userStuff.id;
            req.session.loggedIn = true;
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try{
        const userStuff = await User.findOne({ where : {email: req.body.email} });
        const goodPassword = await userStuff.checkPassword(req.body.password);
        if(!userStuff) {
            res.status(400).json({message: "Are you sure you've been here before? We aren't familiar with either your email or your password. Which? We can't say"})
            return;
        }
        if(!goodPassword) {
            res.status(400).json({message: "Are you sure you've been here before? We aren't familiar with either your email or your password. Which? We can't say"})
            return;
        }
        req.session.save(() => {
            req.session.userID = userStuff.id;
            req.session.loggedIn = true;
            res.json({ user: userStuff, message: 'Hey! Welcome back, always good to see a familiar face!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req,res) => {
        if(req.session.loggedIn) {
            req.session.destroy(() => {
                res.status(204).end();
            });
        } else {
            res.status(400).end();
        }
});

module.exports = router;
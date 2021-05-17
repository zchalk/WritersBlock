const router = require('express').Router();
const { Prompts, Blogs, User } = require('../models');
const withAuth = require('../utils/auth');
let getRandomInt = require('../utils/random');
const sequelize = require('../config/connection');

router.get('/', async (req, res) => {
    try {
        res.render('homepage', {
            logged_in: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', async (req, res) => {
    try {
        console.log(req.session.userID)
        const userData = await User.findByPk(req.session.userID, {
            include:[
                {
                    model: Blogs, 
                    include:[
                        {
                            model: Prompts 

                        },]
                }
            ]   
        });
        const userStuff = userData.get({plain: true});
        const blogs = userStuff.blogs;
        console.log(blogs)
        res.render('profile', {
            blogs,
            logged_in: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post', async (req, res) => {
    
    const [results, metadata] = await sequelize.query("SELECT COUNT(*) FROM prompts;");
    let randNum = getRandomInt((results[0]['COUNT(*)'])-1);

    try{ 
        const promptData = await Prompts.findByPk(randNum);
        if(!promptData) {
            res.status(404).json({message: 'No prompt with this id!'});
            return;
        }
        const p = promptData.get({ plain: true });
        res.render('post', {
            ...p,
            logged_in: req.session.loggedIn
        });
      } catch (err) {
          res.status(500).json(err);
      };     
  });
  router.get('/prompt', async (req, res) => {
    try {
        res.render('prompt', {
            logged_in: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
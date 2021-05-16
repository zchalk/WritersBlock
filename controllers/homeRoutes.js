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
                // {
                //     model: Prompts, 
                //     attributes: ['id', 'prompt_title', 'prompt_text'],
                // },
                {
                    model: Blogs 
                    // attributes: ['id', 'blog_text', 'prompt_id', 'user_id'],
                }
            ]   
        });
        const userStuff = userData.get({plain: true});
        console.log(userStuff)
        res.render('profile', {
            ...blogs,
            logged_in: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post', async (req, res) => {
    
    const [results, metadata] = await sequelize.query("SELECT COUNT(*) FROM prompts;");
    let randNum = getRandomInt(results[0]['COUNT(*)']);

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


module.exports = router;
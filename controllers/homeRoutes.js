const router = require('express').Router();
const { Prompts } = require('../models');
const withAuth = require('../utils/auth');
let getRandomInt = require('../utils/random');
const sequelize = require('../config/connection');

router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/prompt/:id', async (req, res) => {
    
    const [results, metadata] = await sequelize.query("SELECT COUNT(*) FROM prompts;");
    let randNum = getRandomInt(results[0]['COUNT(*)']);

    try{ 
        const promptData = await Prompts.findByPk(randNum);
        if(!promptData) {
            res.status(404).json({message: 'No prompt with this id!'});
            return;
        }
        const p = promptData.get({ plain: true });
        res.render('prompt', p);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

module.exports = router;
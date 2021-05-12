const router = require('express').Router();
const { Prompts } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

<<<<<<< HEAD
router.get('/profile', async (req, res) => {
    try {
        res.render('profile');
    } catch (err) {
        res.status(500).json(err);
    }
});
=======
router.get('/prompt/:id', async (req, res) => {
    try{ 
        const promptData = await Prompts.findByPk(req.params.id);
        if(!promptData) {
            res.status(404).json({message: 'No prompt with this id!'});
            return;
        }
        const p = promptData.get({ plain: true });
        console.log(p);
        res.render('prompt', p);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

>>>>>>> 1a67e8ec436418d3820bf878178d3663543b1f96
module.exports = router;
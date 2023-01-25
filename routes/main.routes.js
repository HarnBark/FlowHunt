const router = require('express').Router();
const { Candidate } = require('../db/models');
const Main = require('../views/Main');

router.get('/', async (req, res) => {
  try {
    const candidatesDB = await Candidate.findAll();
    res.renderComponent(Main, { title: 'Main page', candidatesDB });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

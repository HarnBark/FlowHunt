const router = require('express').Router();
const { Candidate } = require('../db/models');
const Main = require('../views/Main');

router.get('/', async (req, res) => {
  try {
    const data = await Candidate.findAll({ raw: true });
    res.renderComponent(Main, { title: 'HuntFlow', data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:status', async (req, res) => {
  try {
    const { status } = req.params;
    if (status) {
      const data = await Candidate.findAll({ where: { status }, raw: true });
      return res.renderComponent(Main, { title: 'HuntFlow', data });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;

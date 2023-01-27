const router = require('express').Router();
const { Recruter } = require('../db/models');

router.post('/recruter', async (req, res) => {
  const { name, email } = req.body;
  if (!name && !email) {
    res.status(400).json({ message1: 'exists' });
    return;
  }
  const recruter = await Recruter.create({
    name,
    email,
  });
  res.json(recruter);
});

module.exports = router;

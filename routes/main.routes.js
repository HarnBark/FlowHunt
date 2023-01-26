const router = require('express').Router();
const { Candidate } = require('../db/models');
const Main = require('../views/Main');

router.get('/', async (req, res) => {
  try {
    const candidatesDB = await Candidate.findAll();
    res.renderComponent(Main, { title: 'HuntFlow', candidatesDB });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  // eslint-disable-next-line object-curly-newline
  const { name, photo, email, experience, phone, skype, zoom } = req.body;
  if (!name && !photo && !email && !experience && !phone && !skype && !zoom) {
    res.status(400).json({ message1: 'exists' });
    return;
  }
  await Candidate.create({
    name,
    photo,
    email,
    experience,
    phone,
    skype,
    zoom,
  });
  res.json({ reg: true });
  // res.status(200).json({ message: 'Card added' });
});

module.exports = router;

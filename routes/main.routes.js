const router = require('express').Router();
const { Candidate } = require('../db/models');
const CandidateSmallCard = require('../views/CandidateSmallCard');
const Main = require('../views/Main');
const CandidateCard = require('../views/CandidateCard');

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
      res.renderComponent(Main, { title: 'HuntFlow', data });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


router.post('/', async (req, res) => {
  // eslint-disable-next-line object-curly-newline
  const { name, photo, email, experience, phone, skype, zoom } = req.body;
  if (!name && !photo && !email && !experience && !phone && !skype && !zoom) {
    res.status(400).json({ message1: 'exists' });
    return;
  }
  let candidate = await Candidate.create({
    name,
    photo,
    email,
    experience,
    phone,
    skype,
    zoom,
  });
  res.renderComponent(CandidateSmallCard, candidate = { candidate }, { doctype: false });
  // res.json({ reg: true });
  // res.status(200).json({ message: 'Card added' });
});

module.exports = router;

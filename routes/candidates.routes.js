const router = require('express').Router();
const Candidates = require('../views/CandidatesList');
const { Candidate } = require('../db/models');
const CandidateCard = require('../views/CandidateCard');

router.get('/', async (req, res) => {
  try {
    const candidatesDB = await Candidate.findAll();
    res.renderComponent(Candidates, { title: 'HuntFlow', candidatesDB });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.post('/', async (req, res) => {
  const {
    name, img, year, description,
  } = req.body;
  if (name && img && year && description) {
    const newCandidate = await Candidate.create({
      name, img, year, description, user_id: req.session.userid,
    });
    // res.json(newCar);
    res.renderComponent(CandidateCard, { candidate: newCandidate }, { doctype: false });
  }
});
// router.delete('/:idCar', async (req, res) => {
//   const { idCar } = req.params;
//   const { userid } = req.session;
//   const car = await Car_card.findOne({ where: { id: idCar } });
//   if (car.user_id === userid) {
//     const del = await Car_card.destroy({ where: { id: idCar } });
//     res.json({ key: del });
//   } else {
//     res.json({ key: 'не удалили' });
//   }
// });
module.exports = router;

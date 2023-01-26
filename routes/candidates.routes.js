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
  // eslint-disable-next-line object-curly-newline
  const { name, photo, email, experience, phone, skype, zoom } = req.body;
  if (name && photo && email && experience && phone && skype && zoom) {
    const newCandidate = await Candidate.create({
      name,
      photo,
      email,
      experience,
      phone,
      skype,
      zoom,
      //   user_id: req.session.userid,
    });
    res.renderComponent(
      CandidateCard,
      { candidate: newCandidate },
      // eslint-disable-next-line comma-dangle
      { doctype: false }
    );
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

const router = require('express').Router();
const { Candidate } = require('../db/models');
const CandidateCard = require('../views/CandidateCard');

router.get('/:id', async (req, res) => {
  try {
    let candidate = await Candidate.findOne({
      where: { id: req.params.id },
      raw: true,
    });
    // console.log(candidate);
    res.renderComponent(CandidateCard, (candidate = { candidate }), {
      doctype: false,
    });
  } catch (error) {
    res.send('error');
  }
});

module.exports = router;

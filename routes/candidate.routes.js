const router = require('express').Router();
const { Candidate } = require('../db/models');

const CandidateCard = require('../views/CandidateCard');

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const candidate = await Candidate.findOne({ where: { id }, raw: true });
    res.renderComponent(CandidateCard, { candidate }, { doctype: false });
  });


  module.exports = router
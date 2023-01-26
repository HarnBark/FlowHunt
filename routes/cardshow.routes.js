const express = require('express');
const { Candidate } = require('../db/models');
const CandidateCard = require('../views/CandidateCard');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    let candidate = await Candidate.findOne({
      where: { id: req.params.id },
      raw: true,
    });
    res.renderComponent(CandidateCard, (candidate = { candidate }), {
      doctype: false,
    });
  } catch (error) {
    res.send('error');
  }
});

module.exports = router;

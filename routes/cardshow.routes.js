const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
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
    res.text('error');
  }
});

module.exports = router;

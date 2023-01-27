const React = require('react');

const CandidateCard = require('./CandidateCard');
const CandidateSmallCard = require('./CandidateSmallCard');

function CandidatesList({ title, candidatesDB }) {
  return (
    <div className="candidates">
      <div id="cand_name" className="overflow">
        {candidatesDB.map((candidate) => (
          <CandidateSmallCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
      <div id="cand_list">
        <CandidateCard candidate={candidatesDB[0]} />
      </div>
    </div>
  );
}

module.exports = CandidatesList;

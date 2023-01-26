const React = require('react');
const Layout = require('./Layout');
const Card = require('./CandidateCard');

function CandidatesList({ candidatesDB }) {
  return (
    <div className="candidates">
      <div id="cand_name">
        {candidatesDB.map((candidate) => (
          <Card key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>

  );
}

module.exports = CandidatesList;

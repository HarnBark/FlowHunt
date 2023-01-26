const React = require('react');
const Layout = require('./Layout');
const Card = require('./CandidateCard');

function CandidatesList({ title, candidatesDB }) {
  return (
    // <Layout title={title}>
    <div className="candidates">
      <div id="cand_name">
        {candidatesDB.map((candidate) => (
          <Card key={candidate.id} candidate={candidate} />
        ))}
      </div>
      <div id="cand_list">
        {candidatesDB.map((candidate) => (
          <Card key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
    // </Layout>
  );
}

module.exports = CandidatesList;

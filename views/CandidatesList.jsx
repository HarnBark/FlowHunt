const React = require('react');
const Card = require('./CandidateCard');
const Layout = require('./Layout');

function CandidatesList({ title, candidatesDB }) {
  return (
    <Layout title={title}>
      <div className="cont_cand" id="cand_list">
        {candidatesDB.map((candidate) => (
          <Card key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = CandidatesList;

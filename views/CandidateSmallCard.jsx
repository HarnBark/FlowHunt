/* eslint-disable react/prop-types */
const React = require('react');

function CandidateSmallCard({ candidate }) {
  return (
    <div
      id="smallCard"
      className={`${
        candidate.id === 1 && 'cardGrey'
      } cand__container cand_cards cand_card${candidate.id}`}
      data-id={candidate.id}
    >
      <img src={candidate.photo} alt="candidate" className="cand__img" />
      <div className="cand__name">{candidate.name}</div>
    </div>
  );
}
module.exports = CandidateSmallCard;

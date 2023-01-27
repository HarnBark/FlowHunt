/* eslint-disable react/prop-types */
const React = require('react');
const RecruterList = require('./RecrutersList');

function CandidateCard({ candidate, recruter }) {
  return (
    <div className="cand__container">
      <div className="cand__inside">
        <div className="cand__info">
          <div className="cand__name">{candidate.name}</div>
          <div className="cand__info__inside">
            <div className="cand__info__left">
              <p>Почта:</p>
              <p>Опыт работы:</p>
              <p>Телефон:</p>
              <p>Skype:</p>
              <p>Zoom:</p>
              <p>Рекрутер:</p>
            </div>
            <div className="cand__info__right">
              <div>{candidate.email}</div>
              <div>{candidate.experience}</div>
              <div>{candidate.phone}</div>
              <div>{candidate.skype}</div>
              <div>{candidate.zoom}</div>
              <div id="recruter_Id" />
            </div>
          </div>
        </div>
        <img src={candidate.photo} alt="candidate" className="cand__img" />
      </div>
      <div className="cand__buttons">
        <div className="cand__status">{candidate.status}</div>
        <RecruterList />
      </div>
    </div>
  );
}
module.exports = CandidateCard;

/* eslint-disable react/prop-types */
const React = require('react');

function CandidateCard({ candidate }) {
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
            </div>
            <div className="cand__info__right">
              <div>{candidate.email}</div>
              <div>{candidate.experience}</div>
              <div>{candidate.phone}</div>
              <div>{candidate.skype}</div>
              <div>{candidate.zoom}</div>
            </div>
          </div>
        </div>
        <img src={candidate.photo} alt="candidate" className="cand__img" />
      </div>

      <div className="cand__buttons">
        <div className="cand__status">{candidate.status}</div>
        <select>
          <option>Сменить этап</option>
          <option>Отправлено приглашение</option>
          <option>Звонок-скрининг</option>
          <option>Видеоинтервью</option>
          <option>Резюме у заказчика</option>
          <option>Интервью с заказчиком</option>
          <option>Выставлен оффер</option>
          <option>Выход на работу</option>
          <option>Отказ</option>
        </select>
      </div>
    </div>
  );
}
module.exports = CandidateCard;

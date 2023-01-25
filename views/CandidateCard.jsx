const React = require('react');

function CandidateCard({ candidate }) {
  return (
    <div className="cand__profile__container">
      <div className="cand__container">
        <img src={candidate.img} alt="candidate" />
        <div>{candidate.name}</div>
        <div>{candidate.email}</div>
        <div>{candidate.experience}</div>
        <div>{candidate.phone}</div>
        <div>{candidate.skype}</div>
        <div>{candidate.zoom}</div>
        <div>{candidate.status}</div>
        <select>
          <option>Сменить этап</option>
          <option>Отправлено приглашение</option>
          <option>Звонок-скрининг</option>
          <option>Видеоинтервью</option>
          <option>Резюме у заказчика</option>
          <option>Интервью с заказчиком</option>
          <option>Оффер</option>
          <option>Выход на работу</option>
          <option>Отказ</option>
        </select>
        {/* {user && user.id === candidate.user_id && (
          <button type="button" className="prodano" data-id={car.id}>
            продал
          </button>
        )} */}
      </div>
    </div>
  );
}
module.exports = CandidateCard;

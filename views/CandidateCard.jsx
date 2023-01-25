const React = require('react');

function CandidateCard({ candidate }) {
  return (
    <div className="cand__profile__container">
      <div className="cand__container">
        <div className="cand__inside">
          <div className="cand__info">
            <div className="cand__name">{candidate.name}</div>
            <div className="cand__info__inside">
              <div className="cand__info__left">
                <div>
                  <p>Почта:</p>
                </div>
                <div>
                  <p>Опыт работы:</p>
                </div>
                <div>
                  <p>Телефон:</p>
                </div>
                <div>
                  <p>Skype:</p>
                </div>
                <div>
                  <p>Zoom:</p>
                </div>
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
      {/* {user && user.id === candidate.user_id && (
          <button type="button" className="prodano" data-id={car.id}>
            продал
          </button>
        )} */}
    </div>
  );
}
module.exports = CandidateCard;

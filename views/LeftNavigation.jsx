const React = require('react');
const AddCandidate = require('./AddCandidate');

function LeftNavigation({ data = [] }) {
  const allCandidateCount = data.length - 1;
  const sendEmailCount = data.filter((condidate) => condidate.status === 'SendEmail').length;
  const callCount = data.filter((condidate) => condidate.status === 'Call').length;
  const videoCallCount = data.filter((condidate) => condidate.status === 'VideoCall').length;
  const InterviewCount = data.filter((condidate) => condidate.status === 'Interview').length;
  const toCustomerCount = data.filter((condidate) => condidate.status === 'toCustomer').length;
  const offerCount = data.filter((condidate) => condidate.status === 'Offer').length;
  const workCount = data.filter((condidate) => condidate.status === 'Work').length;
  const refuseCount = data.filter((condidate) => condidate.status === 'Refuse').length;

  return (
    <div className="nav__container">
      <h3 className="menu__title">Меню</h3>
      <ul method="post" className="nav__items" id="menu-main">
        <li className="nav__item">
          <a href="/main" className="menu-item active">
            <p>Все кандидаты</p>
            <div className="counts">
              <div className="count">{allCandidateCount}</div>
            </div>
          </a>
        </li>
        <li className="nav__item">
          <a href="/main/SendEmail" className="menu-item">
            <p>Отправлено приглашение</p>
            <div className="counts">
              <div className="count">{sendEmailCount}</div>
            </div>
          </a>
        </li>
        <li data-status="Call" className="nav__item">
          <a href="/main/Call" className="menu-item">
            <p>Назначен звонок-скрининг</p>
            <div className="counts">
              <div className="count">{callCount}</div>
            </div>
          </a>
        </li>
        <li data-status="VideoCall" className="nav__item">
          <a href="/main/VideoCall" className="menu-item">
            <p>Назначено видеоинтервью</p>
            <div className="counts">
              <div className="count">{videoCallCount}</div>
            </div>
          </a>
        </li>
        <li data-status="ToCustomer" className="nav__item">
          <a href="/main/ToCostumer" className="menu-item">
            <p>Резюме передано заказчику</p>
            <div className="counts">
              <div className="count">{toCustomerCount}</div>
            </div>
          </a>
        </li>
        <li data-status="Interview" className="nav__item">
          <a href="/main/Interview" className="menu-item">
            <p>Интервью с заказчиком</p>
            <div className="counts">
              <div className="count">{InterviewCount}</div>
            </div>
          </a>
        </li>
        <li data-status="Offer" className="nav__item">
          <a href="/main/Offer" className="menu-item">
            <p>Выставлен оффер</p>
            <div className="counts">
              <div className="count">{offerCount}</div>
            </div>
          </a>
        </li>
        <li data-status="Work" className="nav__item">
          <a href="/main/Work" className="menu-item">
            <p>Выход на работу</p>
            <div className="counts">
              <div className="count">{workCount}</div>
            </div>
          </a>
        </li>
        <li data-status="Refuse" className="nav__item">
          <a href="main/Refuse" className="menu-item">
            <p>Отказ</p>
            <div className="counts">
              <div className="count">{refuseCount}</div>
            </div>
          </a>
        </li>
      </ul>

      <button id="myBtn" type="button">
        <div className="new-btn">
          <img src="/img/cross-icon.svg" alt="Добавить" />
        </div>
      </button>
      <div id="myModal" className="modal">
        <div className="modal-content">
          {/* <div class="modal-header">
            <span class="close">&times;</span>
            <h2>Modal Header</h2>
          </div> */}
          <div className="modal-body">
            <AddCandidate />
          </div>
        </div>
      </div>

      {/* <div className="modal-window">
        <input type="checkbox" className="modal-trigger" id="modal-window" />
        <label className="modal-overlay" htmlFor="modal-window" />
        <label className="btn-modal" htmlFor="modal-window">
          <div className="new-btn">
            <img src="/img/cross-icon.svg" alt="Добавить" />
          </div>
        </label>

        <div className="modal-container">
          <div className="modal-content">
            <div className="modal-content-body">
              <AddCandidate />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
module.exports = LeftNavigation;

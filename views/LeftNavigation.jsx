const React = require('react');
const AddCandidate = require('./AddCandidate');

function LeftNavigation({ data }) {
  return (
    <div className="nav__container">
      <h3 className="menu__title">Меню</h3>
      <ul method="post" className="nav__items" id="menu-main">
        <li className="nav__item">
          <a href="/" className="menu-item active">
            <p>Все кандидаты</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="menu-item">
            <p>Новые кандидаты</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="menu-item">
            <p>Отправлено приглашение</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
        <li data-status="Call" className="nav__item">
          <a href="/Call" className="menu-item">
            <p>Назначен звонок-скрининг</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
        <li data-status="VideoCall" className="nav__item">
          <a href="/VideoCall" className="menu-item">
            <p>Назначено видеоинтервью</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
        <li data-status="ToCustomer" className="nav__item">
          <a href="/ToCostumer" className="menu-item">
            <p>Резюме передано заказчику</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
        <li data-status="Interview" className="nav__item">
          <a href="/Interview" className="menu-item">
            <p>Интервью с заказчиком</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
        <li data-status="Offer" className="nav__item">
          <a href="/Offer" className="menu-item">
            <p>Выставлен оффер</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
        <li data-status="Work" className="nav__item">
          <a href="/Work" className="menu-item">
            <p>Выход на работу</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
        <li data-status="Refuse" className="nav__item">
          <a href="/Refuse" className="menu-item">
            <p>Отказ</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
      </ul>
      <div className="modal-window">
        <input type="checkbox" className="modal-trigger" id="modal-window" />
        <label className="modal-overlay" htmlFor="modal-window" />
        <label className="btn-modal" htmlFor="modal-window">
          <div className="new-btn">
            <img src="/img/cross-icon.svg" alt="Добавить" />
          </div>
        </label>

        <div className="modal-container">
          <div className="modal-content">
            <div className="modal-content-header">
              <h3 className="modal-content-title">Lorem ipsum</h3>
            </div>
            <div className="modal-content-body">
              <AddCandidate />
            </div>

            <div className="modal-content-footer">
              <label htmlFor="modal-window" className="item action">
                Закрыть
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
module.exports = LeftNavigation;

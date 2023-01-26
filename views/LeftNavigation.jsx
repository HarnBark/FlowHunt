/* eslint-disable jsx-a11y/anchor-is-valid */
const React = require('react');

function LeftNavigation() {
  return (
    <div className="nav__container">
      <h3 className="menu__title">Меню</h3>
      <ul className="nav__items" id="menu-main">
        <li className="nav__item">
          <a href="#" className="menu-item active">
            <p>Все кандидаты</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="menu-item">
            <p>Новые кандидаты</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="menu-item">
            <p>Отправлено приглашение</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="menu-item">
            <p>Назначен звонок-скрининг</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="menu-item">
            <p>Назначено видеоинтервью</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="menu-item">
            <p>Резюме передано заказчику</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="menu-item">
            <p>Интервью с заказчиком</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="menu-item">
            <p>Выставлен оффер</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="menu-item">
            <p>Выход на работу</p>
            <div className="counts">
              <div className="count">1</div>
              <div className="count">2</div>
            </div>
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="menu-item">
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

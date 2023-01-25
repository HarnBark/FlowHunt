const React = require('react');

function Navigation() {
  return (
    <div className="nav__container">
      <ul className="nav__items">
        <li className="nav__item">
          <a href="/">В работе</a>
        </li>
        <li className="nav__item">
          <a href="/">У заказчика</a>
        </li>
        <li className="nav__item">
          <a href="/">Интервью</a>
        </li>
        <li className="nav__item">
          <a href="/">Оффер</a>
        </li>
        <li className="nav__item">
          <a href="/">Выход на работу</a>
        </li>
        <li className="nav__item">
          <a href="/">Отказ</a>
        </li>
      </ul>
    </div>
  );
}
module.exports = Navigation;

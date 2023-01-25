const React = require('react');

function LeftNavigation() {
  return (
    <div className="nav__container">
      <ul className="nav__items">
        <li className="nav__item">
          <a href="/">Все кандидаты</a>
        </li>
        <li className="nav__item">
          <a href="/">Новые кандидаты</a>
        </li>
        <li className="nav__item">
          <a href="/">Отправлено письмо-приглашение</a>
        </li>
        <li className="nav__item">
          <a href="/">Назначен звонок-скрининг</a>
        </li>
        <li className="nav__item">
          <a href="/">Назначено видеоинтервью</a>
        </li>
        <li className="nav__item">
          <a href="/">Резюме передано заказчику</a>
        </li>
        <li className="nav__item">
          <a href="/">Интервью с заказчиком</a>
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
module.exports = LeftNavigation;

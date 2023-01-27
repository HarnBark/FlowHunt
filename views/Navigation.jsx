/* eslint-disable jsx-a11y/label-has-associated-control */
const React = require('react');

function Navigation() {
  return (
    <div className="navigation">
      <a href="/" className="logo">
        HuntFlow
      </a>
      <nav>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars" />
        </label>
        <ul>
          <li>
            <a href="/reg">LogIn</a>
          </li>
          <li>
            <a href="/logout">LogOut</a>
          </li>
          <li>
            <a href="/auth">Войти</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

module.exports = Navigation;

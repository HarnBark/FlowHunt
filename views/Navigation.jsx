/* eslint-disable jsx-a11y/label-has-associated-control */
const React = require('react');

function Navigation() {
  return (
    <div className="navigation">
      <a href="/" className="logo">
        HuntFlow
      </a>
      <nav>
        <ul>
          <li>
            <a href="/log">LogIn</a>
          </li>
          <li>
            <a href="/logout">LogOut</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

module.exports = Navigation;

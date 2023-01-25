const React = require('react');

function Navigation() {
  return (
    <div className="container">
      <a href="/" className="logo">
        HuntFlow
      </a>
      {/* <ul>
        <li className="item">
          <a href="/log">LogIn</a>
        </li>
        <li className="item">
          <a href="/logout">LogOut</a>
        </li>
      </ul> */}
    </div>
  );
}

module.exports = Navigation;

/* eslint-disable jsx-a11y/label-has-associated-control */
const React = require('react');

function Navigation({ user }) {
  return (
    <div className="navigation">
      <a href="/" className="logo">
        HuntFlow
      </a>
      <nav>
        {!user && (
          <>
            <li>
              <a href="/reg" className="men">
                Зарегистрироваться
              </a>
            </li>
            <li>
              <a href="/auth" className="men">
                Войти
              </a>
            </li>
          </>
        )}
        {user && (
          <>
            <li className="logname" className="men">
              Привет, {user}!
            </li>
            <li>
              <a href="/logout" className="men">
                Выйти
              </a>
            </li>
          </>
        )}
      </nav>
    </div>
  );
}

module.exports = Navigation;

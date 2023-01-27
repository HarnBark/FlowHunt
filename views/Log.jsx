const React = require('react');
const Layout = require('./Layout');

module.exports = function Login({ title }) {
  return (
    <Layout title={title}>
      <div className="container form__container">
        <div className="login">
          <h1 className="main__title">Вход</h1>
          <div className="cont_form">
            <form id="loginForm" action="/auth" method="post">
              <div>
                <input id="email" name="email" type="email" />
                <label htmlFor="email">E-mail</label>
              </div>

              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  minLength="5"
                />
                <label htmlFor="password">Пароль</label>
              </div>

              <p className="auth">
                <button type="submit">Войти</button>
              </p>
            </form>
          </div>
          <div className="errorBlock"></div>
        </div>
      </div>
    </Layout>
  );
};

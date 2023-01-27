const React = require('react');
const Layout = require('./Layout');

module.exports = function Reg({ title }) {
  return (
    <Layout title={title}>
      <div className="container form__container">
        <div className="login">
          <h1 className="main__title">Регистрация</h1>
          <div className="cont_form">
            <form id="regForm" action="/reg" method="post">
              <div>
                <input id="login" name="login" type="text" />
                <label htmlFor="login">Придумайте логин</label>
              </div>
              <div>
                <input id="email" name="email" type="email" />
                <label htmlFor="email">E-mail</label>
              </div>
              <div>
                <input
                  id="password1"
                  name="password1"
                  type="password"
                  minLength="5"
                />
                <label htmlFor="password1">Пароль</label>
              </div>
              <div>
                <input
                  id="passwordRepeat"
                  name="passwordRepeat"
                  type="password"
                  minLength="5"
                />
                <label htmlFor="passwordRepeat">Повторите пароль</label>
              </div>
              <p className="auth">
                <button type="submit">Зарегистрироваться</button>
              </p>
            </form>
          </div>
          <div className="errorBlock"></div>
        </div>
      </div>
    </Layout>
  );
};

const React = require('react');
const Navigation = require('./Navigation');

function Layout({ title, children, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/img/favicon.png" sizes="32x32" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/styles.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
        <title>{title}</title>
      </head>
      <link />
      <body>
        <Navigation user={user}/>
        <div className="body__container">
          {children}
          <footer>&copy; HuntFlow 2023</footer>
        </div>
        <script defer src="/js/modal.js" />
        <script defer src="/js/chooseCandidate.js" />
        <script defer src="/js/showcard.js" />

        <script defer src="/js/recruter.js" />
        <script defer src="/js/logoRego.js" />
      </body>
    </html>
  );
}

module.exports = Layout;

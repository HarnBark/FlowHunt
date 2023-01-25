const React = require('react');
const LeftNavigation = require('./LeftNavigation');
const Navigation = require('./Navigation');

function Layout({ title, children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="#" />
        <link rel="stylesheet" href="#" />
        <link rel="stylesheet" href="#" />
        <script defer src="/scripts/" />
        <title>{title}</title>
      </head>
      <link />
      <body>
        <Navigation />
        <div className="body__container">
          <LeftNavigation />
          {children}
        </div>
      </body>
    </html>
  );
}

module.exports = Layout;

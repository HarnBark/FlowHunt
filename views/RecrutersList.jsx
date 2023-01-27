const React = require('react');

function RecruterList() {
  return (
    <div className="recruter">
      <form action="/recruter" method="post" className="add_recruterForm">
        <div>
          <input placeholder="Name" type="text" name="name" required />
        </div>
        <div>
          <input placeholder="Email" type="text" name="email" required />
        </div>
        <button type="submit">Назначить рекрутера</button>
      </form>
    </div>
  );
}

module.exports = RecruterList;

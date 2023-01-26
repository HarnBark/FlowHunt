/* eslint-disable jsx-a11y/label-has-associated-control */
const React = require('react');

function AddCandidate() {
  return (
    <>
      <div className="cont_form">
        <form action="/" method="POST" id="addcand" className="form_add">
          <label> Name</label>
          <input name="name" type="text" required />
          <label> Photo</label>
          <input name="photo" type="text" required />
          <label> Email</label>
          <input name="email" type="text" required />
          <label> Experience</label>
          <input name="experience" type="text" required />
          <label> Phone</label>
          <input name="phone" type="text" required />
          <label> Skype</label>
          <input name="skype" type="text" required />
          <label> Zoom</label>
          <input name="zoom" type="text" required />
          <button type="submit">Добавить</button>
          <p id="add" />
        </form>
      </div>
      <script defer src="/js/candidate.js" />
    </>
  );
}

module.exports = AddCandidate;

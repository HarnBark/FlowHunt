/* eslint-disable jsx-a11y/label-has-associated-control */
const React = require('react');

function AddCandidate() {
  return (
    <>
      <div className="cont_form">
        <form action="/" method="POST" id="addcand" className="form_add">
          <div>
            <input id="name" name="name" type="text" required />
            <label htmlFor="name">Name</label>
          </div>
          <div>
            <input id="photo" name="photo" type="text" required />
            <label htmlFor="photo">Photo</label>
          </div>
          <div>
            <input id="email" name="email" type="text" required />
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input id="experience" name="experience" type="text" required />
            <label htmlFor="experience">Experience</label>
          </div>
          <div>
            <input id="phone" name="phone" type="text" required />
            <label htmlFor="phone">Phone</label>
          </div>
          <div>
            <input id="skype" name="skype" type="text" required />
            <label htmlFor="skype">Skype</label>
          </div>
          <div>
            <input id="zoom" name="zoom" type="text" required />
            <label htmlFor="zoom">Zoom</label>
          </div>
          <div className="close-block">
            <button type="submit" className="close">
              Добавить
            </button>
          </div>
          <p id="add" />
        </form>
      </div>
      <script defer src="/js/candidate.js" />
    </>
  );
}

module.exports = AddCandidate;

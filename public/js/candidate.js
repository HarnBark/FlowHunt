document.querySelector('#addcand').addEventListener('submit', async (e) => {
  e.preventDefault();
  // eslint-disable-next-line object-curly-newline, operator-linebreak
  const { name, photo, email, experience, phone, skype, zoom, method, action } =
    e.target;
  const res = await fetch(action, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name.value,
      photo: photo.value,
      email: email.value,
      experience: experience.value,
      phone: phone.value,
      skype: skype.value,
      zoom: zoom.value,
    }),
  });
  const candHtml = await res.text();

  document
    .querySelector('#cand_name')
    .insertAdjacentHTML('beforeend', candHtml);

  e.target.reset();
});

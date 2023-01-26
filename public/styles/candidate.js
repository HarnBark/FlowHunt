document.querySelector('#addcand').addEventListener('submit', async (e) => {
  e.preventDefault();
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
  //   const data = await res.json();
  //   const carHtml = `
  //  <div className="car__card__container">
  //  <div className="car__container">
  //    <h3>${data.name}</h3>
  //    <h6>${data.year}</h6>
  //    <img src=${data.img} alt="car" />
  //    <p>${data.description}</p>
  //  </div>
  // </div>
  //  `;
  const candHtml = await res.text();
  document.querySelector('#cand_list').insertAdjacentHTML('beforeend', candHtml);
});

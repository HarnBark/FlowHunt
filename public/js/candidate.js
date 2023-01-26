document.querySelector('#addcand').addEventListener('submit', async (e) => {
  e.preventDefault();
  // eslint-disable-next-line object-curly-newline, operator-linebreak
  const { name, photo, email, experience, phone, skype, zoom, method, action } =
    e.target;
  const smallCard = document.querySelector('#smallCard');
  const newSmallCard = smallCard.cloneNode(true);
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
  const parent = document.querySelector('#cand_name');
  const image = newSmallCard.querySelector('img');
  const nameDiv = newSmallCard.querySelector('div');
  image.src = photo.value;
  nameDiv.textContent = name.value;
  parent.appendChild(newSmallCard);

  // if (candHtml.message) {
  //   document.querySelector('#add').innerHTML = candHtml.message;
  // }
});

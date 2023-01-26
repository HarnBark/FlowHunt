document.querySelectorAll('.cand_cards').forEach((card) => {
  card.addEventListener('click', async (e) => {
    const color = document.querySelector('.cardGrey');
    if (color) {
      color.classList.remove('cardGrey');
    }
    card.classList.add('cardGrey');
    let cardId;
    if (!e.target.classList.contains('cand_cards')) {
      const car = e.target.closest('.cand_cards');
      cardId = car.dataset.id;
    } else {
      cardId = e.target.dataset.id;
    }
    const res = await fetch(`/${cardId}`, {
      method: 'GET',
    });
    const data = await res.text();
    document.querySelector('#cand_list').innerHTML = data;
  });
});

document.querySelector('#cand_name').addEventListener('click', async (e) => {
  const card = e.target.closest('.cand_cards');
  const color = document.querySelector('.cardGrey');
  if (color) {
    color.classList.remove('cardGrey');
  }
  card.classList.add('cardGrey');

  const cardId = card.dataset.id;
  const res = await fetch(`/candidate/${cardId}`, {
    method: 'GET',
  });
  const data = await res.text();
  document.querySelector('#cand_list').innerHTML = data;
});

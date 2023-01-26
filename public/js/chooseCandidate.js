// const navItem = document.querySelector('.nav__items');

// if (navItem) {
//   navItem.addEventListener('click', async (e) => {
//     e.preventDefault();
//     if (e.target.closest('li').classList.contains('nav__item')) {
//       const { status } = e.target.closest('li').dataset;
//       const res = await fetch('/', {
//         method: 'post',
//         headers: { 'Content-Type': 'Application/json' },
//         body: JSON.stringify({ status }),
//       });
//       const data = await res.text();
//       document.querySelector('#cand_name').remove();
//       document.querySelector('.candidate').append(data);
//     }
//   });
// }

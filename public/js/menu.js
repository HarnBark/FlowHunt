const header = document.getElementById('menu-main');
const btns = header.getElementsByClassName('menu-item');
for (let i = 0; i < btns.length; i += 1) {
  btns[i].addEventListener('click', function () {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

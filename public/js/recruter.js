const recrut = document.querySelector('.add_recruterForm');
if (recrut) {
  recrut.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      action, method, name, email,
    } = e.target;
    const res = await fetch(action, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
      }),
    });
    const recruter = await res.json();
    document.querySelector('#recruter_Id').innerHTML = `
        <div>Имя: ${recruter.name}</div>
        <div>Почта: ${recruter.email}</div>`;
  });
}

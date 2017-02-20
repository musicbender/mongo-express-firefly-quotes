const update = document.getElementById('update');
const del = document.getElementById('delete');

update.addEventListener('click', function() {
  fetch('quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'Mal',
      'quote': 'Jayne, your mouth is talking. You might wanna look to that.'
    })
  })
  .then((res) => {
    if (res.ok) return res.json();
  })
  .then(data => {
    console.log(data);
    window.location.reload(true);
  })
});

del.addEventListener('click', function() {
  fetch('quotes', {
    method: 'delete',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'Wash'
    })
  })
  .then(res => {
    if(res.ok) return res.json();
  })
  .then(data => {
    window.location.reload();
  })
});

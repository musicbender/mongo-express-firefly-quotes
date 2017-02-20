const update = document.getElementById('update');

update.addEventListener('click', function() {
  fetch('quotes', {
    method: put,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'Mal',
      'quote': 'Jayne, your mouth is talking. You might wanna look to that.'
    });
  });
});

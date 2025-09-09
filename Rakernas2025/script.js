const scriptURL = 'https://script.google.com/macros/s/AKfycbxvCkq7flAuEFcZYAuiRMn4iug8lhPb7kmKuVxguc_q31U4GRKEgu6P09qH8NkAJV-F/exec';

document.getElementById('formInput').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  formData.append('timestamp', new Date().toISOString());

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('response').textContent = '✅ Data berhasil dikirim!';
    document.getElementById('formInput').reset();
  })
  .catch(error => {
    document.getElementById('response').textContent = '❌ Gagal mengirim data.';
    console.error('Error:', error);
  });
});

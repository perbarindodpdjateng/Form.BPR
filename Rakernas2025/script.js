const scriptURL = 'GANTI_DENGAN_URL_WEB_APP_ANDA';

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

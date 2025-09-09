const scriptURL = 'https://script.google.com/macros/s/AKfycbwWEcSgnCo_L3TnBr7ZtShPdQsKt_nzfVebG0h0Iijw96sdN4W0KyQ7ONx60N0ydeSz/exec';

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

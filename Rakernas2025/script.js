const scriptURL = 'https://script.google.com/macros/s/AKfycbxvCkq7flAuEFcZYAuiRMn4iug8lhPb7kmKuVxguc_q31U4GRKEgu6P09qH8NkAJV-F/exec';

document.getElementById('formInput').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  formData.append('timestamp', new Date().toISOString());

  const progressWrapper = document.getElementById('progressWrapper');
  const progressBar     = document.getElementById('progressBar');
  const responseBox     = document.getElementById('response');

  progressWrapper.style.display = 'block';
  progressBar.style.width = '0%';
  responseBox.textContent = '';
  responseBox.classList.remove('blinkGreen');

  /* ---------- progress simulator ---------- */
  let width = 0;
  const interval = setInterval(() => {
    if (width >= 90) clearInterval(interval);   // tahan di 90% sampai selesai
    else {
      width += 10;
      progressBar.style.width = width + '%';
    }
  }, 100);

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(res => res.json())
    .then(data => {
      clearInterval(interval);
      progressBar.style.width = '100%';
      setTimeout(() => {
        progressWrapper.style.display = 'none';
        responseBox.textContent = '✅ Data berhasil dikirim!';
        responseBox.classList.add('blinkGreen');
      }, 300);
      document.getElementById('formInput').reset();
    })
    .catch(err => {
      clearInterval(interval);
      progressWrapper.style.display = 'none';
      responseBox.textContent = '❌ Gagal mengirim data.';
      console.error(err);
    });
});

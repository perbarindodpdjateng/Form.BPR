// --------------- C O N F I G ---------------
const SCRIPT_ID = 'AKfycbzYRIbl8XZoKjAhT4txNkzMhaf7tSQPUHkjEYfMYUOhWKEs-MpjsPdPLEsRFhm_NCTj'; // <-- ganti dengan ID Anda
const scriptURL = `https://script.google.com/macros/s/AKfycbzYRIbl8XZoKjAhT4txNkzMhaf7tSQPUHkjEYfMYUOhWKEs-MpjsPdPLEsRFhm_NCTj/exec`;

const form = document.getElementById('formInput');
const resp = document.getElementById('response');

form.addEventListener('submit', e => {
  e.preventDefault();
  resp.textContent = 'Mengirim...';

  const fd = new FormData(form);
  fd.append('timestamp', new Date().toISOString());

  fetch(scriptURL, { method: 'POST', body: fd })
    .then(r => r.json())
    .then(d => {
      if (d.status === 'success') {
        resp.textContent = '✅ Data berhasil dikirim!';
        form.reset();
      } else if (d.status === 'missing') {
        resp.textContent = '❌ Masih ada kolom yang kosong.';
      } else {
        resp.textContent = '⚠️ Server merespons tidak dikenal.';
      }
    })
    .catch(err => {
      resp.textContent = '❌ Gagal mengirim data.';
      console.error(err);
    });
});

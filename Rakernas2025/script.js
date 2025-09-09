const scriptURL = 'https://script.google.com/macros/s/AKfycbyH9P2DTPE4f0UdqDcz8KJUV8pmMiQK62Owfh-ovrn1bwL6iZoAp3Ndeh-OHe419GUj/exec';

const form = document.getElementById('formInput');
const responseMsg = document.getElementById('response');

form.addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(form);
  fd.append('timestamp', new Date().toISOString());

  fetch(scriptURL, {method:'POST', body:fd})
    .then(r => r.json())
    .then(d => {
      responseMsg.textContent = '✅ Data berhasil dikirim!';
      form.reset();
    })
    .catch(err => {
      responseMsg.textContent = '❌ Gagal mengirim data.';
      console.error(err);
    });
});

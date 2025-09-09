const scriptURL = 'https://script.google.com/macros/s/AKfycbwLeE78pk7I-cuEeoPwRwmfj-prAOwsNMwDDPno6VJFsisuPukWhlujCxRX1H0sltsF/exec';

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

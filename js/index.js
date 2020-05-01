const $ = n => document.querySelector(n);

const form = $('#text-to-send-form');
form.onsubmit = e => {
  e.preventDefault();
  const text = form['text-to-send'].value;
console.log(text)
  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: text
    })
  });
}
const $ = n => document.querySelector(n);

const form = $('#text-to-send-form');
form.onsubmit = e => {
  e.preventDefault();
  const text = form['text-to-send'].value;

  fetch('/text-to-send/?' + new URLSearchParams({
    message: text
  }), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: text
    })
  })
  //.then(res => res.json())
  //   .then(data => console.log(data))
  //   .catch(err => console.error(err))
}

fetch('.netlify.com/.netlify/functions/text-to-send', {
  method: "Get",
  headers: {
    'Content-Type': 'text/plain'
  }
}).then(res => res.json()).then(data => $('.newMessage').textContent = data).catch(console.error);

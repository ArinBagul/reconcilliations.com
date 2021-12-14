
const scriptURL = 'https://script.google.com/macros/s/AKfycbzuuqKG674WC5nwXaGFlHjRZq8htYcLlajZfKv9giAC9bP5DNsGdVohpax_f8OXUWTBhA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

function myfunction() {
  alert("Submitted Successfully! Redirecting to homepage");
  location.href="/index.html";
}
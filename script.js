function showPage(pageId) 
{
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  document.getElementById(pageId).style.display = 'block';
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if(name && email && message) {
    document.getElementById('formResponse').innerText = `Thank you, ${name}! We will reach out to you at ${email}.`;
    this.reset();
  } else {
    document.getElementById('formResponse').innerText = "Please fill in all fields.";
  }
});
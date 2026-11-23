const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
const dateInput = document.querySelector('input[name="date"]');
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split('T')[0];
dateInput.min = localToday;
document.getElementById('bookingForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Hello Rukkies Beautyworld! I'd like to request an appointment.\n\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nService: ${data.get('service')}\nPreferred date: ${data.get('date')}\nAdditional details: ${data.get('message') || 'None'}\n\nPlease confirm availability and final pricing. Thank you!`;
  window.open(`https://wa.me/2348027010830?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

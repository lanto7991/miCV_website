const buttons = document.querySelectorAll('button');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const closeBtn = document.querySelector('.close-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const msg = btn.getAttribute('data-msg');
    popupMessage.textContent = msg;
    popup.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) popup.classList.add('hidden'); // Cierra al hacer clic fuera del contenido
});

const btnContacto = document.getElementById('btn-contacto');
const popupForm = document.getElementById('popup-form');
const closeBtns = document.querySelectorAll('.close-btn');

// Mostrar formulario al hacer clic
btnContacto.addEventListener('click', () => {
  popupForm.classList.remove('hidden');
});

// Cerrar cualquier popup
closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    popupForm.classList.add('hidden');
    popup.classList.add('hidden');
  });
});

// Cerrar si se hace clic fuera del contenido
popupForm.addEventListener('click', (e) => {
  if (e.target === popupForm) popupForm.classList.add('hidden');
});
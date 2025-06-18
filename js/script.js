// Botones que abren mensajes personalizados (popup)
const messageButtons = document.querySelectorAll('button[data-msg]');
const btnSobreMi = document.querySelector('button[data-msg="Hola, soy Lucas. Desarrollador front-end con pasión por el diseño y la tecnología."]');
const popup = document.getElementById('popup');
const popupContent = popup.querySelector('.popup-content');
const popupMessage = document.getElementById('popup-message');

// Botones de cierre
const closeBtns = document.querySelectorAll('.close-btn');

// Formulario de contacto
const btnContacto = document.getElementById('btn-contacto');
const popupForm = document.getElementById('popup-form');

// 🌙/☀️ Modo oscuro
const botonModo = document.getElementById("modo-toggle");

// ---------------------------
// Abrir popup con mensaje
// ---------------------------
messageButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const msg = btn.getAttribute('data-msg');
    popupMessage.textContent = msg;
    popup.classList.remove('hidden');
  });
});

// ---------------------------
// Abrir formulario contacto
// ---------------------------
btnContacto.addEventListener('click', () => {
  popupForm.classList.remove('hidden');
});

// ---------------------------
// Cerrar popups al hacer clic en botón de cerrar
// ---------------------------
closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    popup.classList.add('hidden');
    popupForm.classList.add('hidden'); });
});

// ---------------------------
// Cerrar popups al hacer clic fuera del contenido
// ---------------------------
popup.addEventListener('click', (e) => {
  if (e.target === popup) popup.classList.add('hidden');
});

popupForm.addEventListener('click', (e) => {
  if (e.target === popupForm) popupForm.classList.add('hidden');
});

// ---------------------------
// Modo oscuro
// ---------------------------
if (localStorage.getItem("modo") === "oscuro") {
  document.body.classList.add("oscuro");
  botonModo.textContent = "☀️ Modo claro";
}

botonModo.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
  const modo = document.body.classList.contains("oscuro") ? "oscuro" : "claro";
  localStorage.setItem("modo", modo);
  botonModo.textContent = modo === "oscuro" ? "☀️" : "🌙 ";
});

btnSobreMi.addEventListener('click', () => {
  // Limpiamos el contenido
  popupContent.innerHTML = '';

  // Creamos el contenido de "Sobre mí"
  const tarjetaHTML = `
    <div class="tarjeta-sobre-mi">
      <img src="img/perfil.jpg" alt="Lucas Lantieri" />
      <h2>Lucas Lantieri</h2>
      <p>Desarrollador front-end con pasión por el diseño y la tecnología.</p>
      <p class="info-adicional">Apasionado por crear experiencias digitales limpias, intuitivas y accesibles.</p>
      <div class="redes-sociales">
        <a href="https://twitter.com/tu_usuario" target="_blank" aria-label="Twitter" title="Twitter">🐦</a>
        <a href="https://linkedin.com/in/tu_usuario" target="_blank" aria-label="LinkedIn" title="LinkedIn">💼</a>
        <a href="https://github.com/tu_usuario" target="_blank" aria-label="GitHub" title="GitHub">🐙</a>
      </div>
      <span class="close-btn">&times;</span>
    </div>
  `;

  popupContent.insertAdjacentHTML('beforeend', tarjetaHTML);
  popup.classList.remove('hidden');
});

btnProyectos.addEventListener('click', () => {
  // Limpiamos el contenido
  popupContent.innerHTML = '';

  // Insertamos las tarjetas de proyectos
  proyectos.forEach(proyecto => {
    const proyectoHTML = `
      <div class="tarjeta-proyecto">
        <img src="${proyecto.imagen}" alt="Proyecto ${proyecto.titulo}" />
        <h3>${proyecto.titulo}</h3>
        <p>${proyecto.descripcion}</p>
        <p><strong>Año:</strong> ${proyecto.anio}</p>
        <p><strong>Referencias:</strong> ${proyecto.referencias}</p>
      </div>
    `;
    popupContent.insertAdjacentHTML('beforeend', proyectoHTML);
  });

  // Insertar botón cerrar si no está
  if (!popupContent.querySelector('.close-btn')) {
    popupContent.insertAdjacentHTML('beforeend', '<span class="close-btn">&times;</span>');
  }

  popup.classList.remove('hidden');

  popupContent.addEventListener('click', (e) => {
  if(e.target.classList.contains('close-btn')){
    popup.classList.add('hidden');
  }
});
});

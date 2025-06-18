// proyectos.js
const proyectos = [
  {
    img: 'img/proyecto1.jpg',
    titulo: 'Proyecto Uno',
    descripcion: 'Descripción breve del proyecto uno.',
    año: 2023,
    referencias: [
      { texto: 'GitHub', url: 'https://github.com/usuario/proyecto1' }
    ]
  },
  {
    img: 'img/proyecto2.jpg',
    titulo: 'Proyecto Dos',
    descripcion: 'Descripción breve del proyecto dos.',
    año: 2024,
    referencias: [
      { texto: 'Sitio Oficial', url: 'https://link.proyecto2.com' }
    ]
  }
  // más proyectos
];

function crearSeccionProyectos() {
  const seccion = document.createElement('section');
  seccion.id = 'seccion-proyectos';
  seccion.classList.add('hidden');

  proyectos.forEach(proy => {
    const div = document.createElement('div');
    div.classList.add('proyecto');

    const img = document.createElement('img');
    img.src = proy.img;
    img.alt = proy.titulo;
    img.classList.add('proyecto-img');

    const h3 = document.createElement('h3');
    h3.textContent = proy.titulo;

    const pDesc = document.createElement('p');
    pDesc.textContent = proy.descripcion;

    const pAño = document.createElement('p');
    pAño.innerHTML = `<strong>Año:</strong> ${proy.año}`;

    const pRefs = document.createElement('p');
    pRefs.innerHTML = `<strong>Referencias:</strong> `;

    proy.referencias.forEach((ref, i) => {
      const a = document.createElement('a');
      a.href = ref.url;
      a.target = '_blank';
      a.textContent = ref.texto;
      pRefs.appendChild(a);
      if (i < proy.referencias.length - 1) {
        pRefs.innerHTML += ', ';
      }
    });

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(pDesc);
    div.appendChild(pAño);
    div.appendChild(pRefs);

    seccion.appendChild(div);
  });

  document.body.appendChild(seccion);
  return seccion;
}
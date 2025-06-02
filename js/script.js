// script.js

// Asegúrate de que existe un contenedor con id="contenedor-proyectos" en tu HTML
const contenedorProyectos = document.getElementById("contenedor-proyectos");

if (contenedorProyectos && typeof proyectos !== "undefined") {
  proyectos.forEach(proyecto => {
    const div = document.createElement("div");
    div.classList.add("proyecto");

    div.innerHTML = `
      <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="imagen-proyecto">
      <h3>${proyecto.titulo}</h3>
      <p>${proyecto.descripcion}</p>
      <p><strong>Herramientas:</strong> ${proyecto.herramientas}</p>
      <a href="${proyecto.github}" target="_blank" class="boton-github">Ver en GitHub</a>
    `;

    contenedorProyectos.appendChild(div);
  });
} else {
  console.error("No se encontró el contenedor o los datos de proyectos.");
}

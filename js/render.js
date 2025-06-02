document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("proyectos-container");
  const botones = document.querySelectorAll(".btn-filtro");

  function renderizarProyectos(filtro) {
    contenedor.innerHTML = "";

    const proyectosFiltrados =
      filtro === "todos"
        ? proyectos
        : proyectos.filter((p) => p.categoria === filtro);

    proyectosFiltrados.forEach((p) => {
      const div = document.createElement("div");
      div.classList.add("tarjeta-proyecto");
      div.innerHTML = `
        <img src="${p.imagen}" alt="${p.titulo}">
        <h3>${p.titulo}</h3>
        <p>${p.descripcion}</p>
        <p><strong>Herramientas:</strong> ${p.herramientas}</p>
        <a href="${p.github}" target="_blank">Ver en GitHub</a>
      `;
      contenedor.appendChild(div);
    });
  }

  renderizarProyectos("todos");

  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      botones.forEach((b) => b.classList.remove("activo"));
      btn.classList.add("activo");
      const filtro = btn.dataset.categoria;
      renderizarProyectos(filtro);
    });
  });
});

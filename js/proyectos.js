const proyectos = [
  {
    titulo: "Proyecto 1",
    descripcion: "Descripción del proyecto 1.",
    imagen: "images/proyecto1.webp",
    enlace: "#",
    categoria: "dashboard"
  },
  {
    titulo: "Proyecto 2",
    descripcion: "Descripción del proyecto 2.",
    imagen: "images/proyecto2.webp",
    enlace: "#",
    categoria: "analisis"
  },
  {
    titulo: "Proyecto 3",
    descripcion: "Descripción del proyecto 3.",
    imagen: "images/proyecto3.webp",
    enlace: "#",
    categoria: "dashboard"
  },
  {
    titulo: "Proyecto 4",
    descripcion: "Descripción del proyecto 4.",
    imagen: "images/proyecto4.webp",
    enlace: "#",
    categoria: "analisis"
  },
  {
    titulo: "Proyecto 5",
    descripcion: "Descripción del proyecto 5.",
    imagen: "images/proyecto5.webp",
    enlace: "#",
    categoria: "dashboard"
  },
  {
    titulo: "Proyecto 6",
    descripcion: "Descripción del proyecto 6.",
    imagen: "images/proyecto6.webp",
    enlace: "#",
    categoria: "analisis"
  },
  {
    titulo: "Proyecto 7",
    descripcion: "Descripción del proyecto 7.",
    imagen: "images/proyecto7.webp",
    enlace: "#",
    categoria: "dashboard"
  },
  {
    titulo: "Proyecto 8",
    descripcion: "Descripción del proyecto 8.",
    imagen: "images/proyecto8.webp",
    enlace: "#",
    categoria: "analisis"
  },
  {
    titulo: "Proyecto 9",
    descripcion: "Descripción del proyecto 9.",
    imagen: "images/proyecto9.webp",
    enlace: "#",
    categoria: "dashboard"
  },
  {
    titulo: "Proyecto 10",
    descripcion: "Descripción del proyecto 10.",
    imagen: "images/proyecto10.webp",
    enlace: "#",
    categoria: "analisis"
  },
  {
    titulo: "Proyecto 11",
    descripcion: "Descripción del proyecto 11.",
    imagen: "images/proyecto11.webp",
    enlace: "#",
    categoria: "dashboard"
  },
  {
    titulo: "Proyecto 12",
    descripcion: "Dashboard interactivo para el análisis de productos agroquímicos, con métricas clave y filtros dinámicos.",
    imagen: "images/proyecto12.webp",
    enlace: "#",
    categoria: "dashboard"
  },
  {
    titulo: "Proyecto 13",
    descripcion: "Dashboard para ingresos y descuentos de un salón de belleza. Permite análisis mensual y por categoría.",
    imagen: "images/proyecto13.webp",
    enlace: "#",
    categoria: "dashboard"
  }
];

function mostrarProyectos(categoria) {
  const contenedor = document.getElementById("proyectos-container");
  contenedor.innerHTML = "";

  const proyectosFiltrados = categoria === "todos"
    ? proyectos
    : proyectos.filter(p => p.categoria === categoria);

  proyectosFiltrados.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("proyecto");
    div.innerHTML = `
      <img src="${p.imagen}" alt="${p.titulo}" />
      <h3>${p.titulo}</h3>
      <p>${p.descripcion}</p>
      <a href="${p.enlace}" target="_blank">Ver en GitHub</a>
    `;
    contenedor.appendChild(div);
  });
}

document.querySelectorAll(".btn-filtro").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".btn-filtro").forEach(b => b.classList.remove("activo"));
    btn.classList.add("activo");
    mostrarProyectos(btn.dataset.categoria);
  });
});

mostrarProyectos("todos");

const proyectos = [
  {
    id: 1,
    categoria: "analisis",
    titulo: "Predicción de cancelación de clientes y segmentación de usuarios — Proyecto para Model Fitness",
    descripcion: "Desarrollé un modelo predictivo para identificar clientes con alto riesgo de cancelación y una segmentación de usuarios para diseñar estrategias personalizadas de retención.",
    herramientas: "Python, Jupyter Notebook, scikit-learn, seaborn",
    github: "https://github.com/GuillermoTeran/Prediccion-de-cancelacion-de-clientes-y-segmentacion-de-usuarios-Proyecto-para-Model-Fitness",
    imagen: "images/proyecto1.webp"
  },
  {
    id: 2,
    categoria: "dashboard",
    titulo: "Caso de Estudio: Dashboard de Tendencias de Videos en YouTube",
    descripcion: "Automatización del análisis de categorías en tendencia en YouTube mediante Tableau Public.",
    herramientas: "Tableau Public, Python, PostgreSQL",
    tableu: "https://public.tableau.com/views/Libro1_17212954380800/Dashboard1?:language=es-ES&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    github: "https://github.com/GuillermoTeran/-Caso-de-Estudio-Dashboard-de-Tendencias-de-Videos-en-YouTube",
    imagen: "images/proyecto2.webp"
  },
  {
    id: 3,
    categoria: "analisis",
    titulo: "Análisis de comportamiento de usuario y test A/A/B en una app de productos alimenticios",
    descripcion: "Comprensión de cómo el diseño de la app afecta el comportamiento del usuario y conversión de ventas.",
    herramientas: "Python, Jupyter Notebook, statsmodels",
    github: "https://github.com/GuillermoTeran/Analisis-de-comportamiento-de-usuario-y-test-A-A-B-en-una-app-de-productos-alimenticios",
    imagen: "images/proyecto3.webp"
  },
  {
    id: 4,
    categoria: "analisis",
    titulo: "Caso de Estudio SQL: Análisis del Comportamiento de Lectores Durante la Pandemia",
    descripcion: "Estudio de comportamiento de lectores a partir de base de datos de una startup editorial durante COVID-19.",
    herramientas: "SQL (PostgreSQL), Python",
    github: "https://github.com/GuillermoTeran/Caso-de-Estudio-SQL-Analisis-del-Comportamiento-de-Lectores-Durante-la-Pandemia",
    imagen: "images/proyecto4.webp"
  },
  {
    id: 5,
    categoria: "analisis",
    titulo: "Caso de Estudio: Detección de Operadores Ineficaces en un Servicio de Telefonía Virtual",
    descripcion: "Análisis exploratorio para identificar operadores con bajo rendimiento en atención al cliente.",
    herramientas: "Python, pruebas estadísticas, visualización",
    github: "https://github.com/GuillermoTeran/Caso-de-Estudio-Deteccion-de-Operadores-Ineficaces-en-un-Servicio-de-Telefonia-Virtual",
    imagen: "images/proyecto5.webp"
  },
  {
    id: 6,
    categoria: "analisis",
    titulo: "Análisis de datos para Zuber: Comportamiento de viajes compartidos en Chicago",
    descripcion: "Identificación de patrones clave en datos de transporte urbano para Zuber.",
    herramientas: "Python, SQL (PostgreSQL), visualización",
    github: "https://github.com/GuillermoTeran/Analisis-de-datos-para-Zuber-Comportamiento-de-viajes-compartidos-en-Chicago",
    imagen: "images/proyecto6.webp"
  },
  {
    id: 7,
    categoria: "analisis",
    titulo: "Análisis de tarifas prepago para Megaline",
    descripcion: "Comparación de rendimiento de planes prepago para mejorar inversión publicitaria.",
    herramientas: "Python, análisis estadístico",
    github: "https://github.com/GuillermoTeran/Analisis-de-tarifas-prepago---Proyecto-Megaline",
    imagen: "images/proyecto7.webp"
  },
  {
    id: 8,
    categoria: "analisis",
    titulo: "Análisis de ventas de videojuegos y detección de patrones de éxito — Proyecto Ice Games",
    descripcion: "Detección de patrones que determinan el éxito de videojuegos para optimización de campañas.",
    herramientas: "Python, visualización de datos",
    github: "https://github.com/GuillermoTeran/Analisis-de-ventas-de-videojuegos-y-deteccion-de-patrones-de-exito-Proyecto-Ice-Games",
    imagen: "images/proyecto8.webp"
  },
  {
    id: 9,
    categoria: "analisis",
    titulo: "Priorización de hipótesis y análisis de prueba A/B para optimización de ingresos — Proyecto de E-commerce",
    descripcion: "Análisis de hipótesis y prueba A/B para aumentar ingresos en tienda online.",
    herramientas: "Python, estadísticas, visualización",
    github: "https://github.com/GuillermoTeran/Priorizacion-de-hipotesis-y-analisis-de-prueba-A-B-para-optimizacion-de-ingresos---Proyecto-de-Ecome",
    imagen: "images/proyecto9.webp"
  },
  {
    id: 10,
    categoria: "analisis",
    titulo: "Análisis de comportamiento de compra de clientes — Proyecto Instacart",
    descripcion: "Estudio del comportamiento de compra de clientes con fines educativos para Instacart.",
    herramientas: "Python, EDA, segmentación",
    github: "https://github.com/GuillermoTeran/Analisis-de-comportamiento-de-compra-de-clientes-Proyecto-Instacart",
    imagen: "images/proyecto10.webp"
  },
  {
    id: 11,
    categoria: "analisis",
    titulo: "Análisis de eficiencia de marketing y comportamiento de clientes — Proyecto para Showz",
    descripcion: "Evaluación del retorno de inversión y comportamiento de usuarios en plataforma de venta de entradas.",
    herramientas: "Python, marketing analytics, cohortes",
    github: "https://github.com/GuillermoTeran/Analisis-de-eficiencia-de-marketing-y-comportamiento-de-clientes-Proyecto-para-Showz",
    imagen: "images/proyecto11.webp"
  },
  {
    id: 12,
    categoria: "dashboard",
    titulo: "Caso de Estudio Dashboard de Ventas Productos Agroquimicos",
    descripcion: "Análisis de ventas mensuales de productos agroquímicos en dos locales mediante Tableau Public.",
    herramientas: "Tableau Public, Excel",
    tableu: "https://public.tableau.com/app/profile/guillermo.teran3150/viz/DashboardProductosAgroquimicos/DashboardVentasProductosAgroquimicos?publish=yes",
    github: "https://github.com/GuillermoTeran/Caso-de-Estudio-Dashboard-Productos-Agroquimicos",
    imagen: "images/proyecto12.webp"
  },
  {
    id: 13,
    categoria: "dashboard",
    titulo: "Caso de Estudio Dashboard Ingresos y Descuentos Salon de Belleza",
    descripcion: "Análisis de una base de datos transaccional con operaciones diarias, incluyendo ingresos por productos y servicios, descuentos aplicados, tipos de pago, y gastos operativos.",
    herramientas: "Excel",
    github: "https://github.com/GuillermoTeran/Caso-de-Estudio-Dashboard-Ingresos-y-Descuentos-Salon-de-Belleza-",
    imagen: "images/proyecto13.webp"
  },  
];


// Para actualizar el portafolio solo se edita este archivo.
export const perfil = {
  nombre: "Felipe Muñoz Zamora",
  rol: "Desarrollador Front-End Trainee",
  ciudad: "Santiago, Chile",
  frases: [
    "interfaces claras",
    "sitios responsivos",
    "código ordenado",
    "experiencias accesibles",
  ],
  email: "fmunza@email.com",
  telefono: "+56 9 1234 5678",
  cv: "CV_Felipe_Munoz.pdf",
};

// [nombre, nivel %, ícono]  ·  ícono: clase de Devicon o un emoji
export const habilidades = {
  "Front-End": [
    ["HTML5 semántico", 90, "devicon-html5-plain"],
    ["CSS3", 85, "devicon-css3-plain"],
    ["Flexbox", 88, "↔️"],
    ["CSS Grid", 82, "▦"],
    ["JavaScript ES6+", 70, "devicon-javascript-plain"],
    ["DOM y eventos", 75, "⚡"],
    ["Vue 3", 60, "devicon-vuejs-plain"],
    ["Bootstrap 5", 85, "devicon-bootstrap-plain"],
    ["APIs REST (Fetch)", 65, "🔌"],
  ],
  "Datos y lenguajes": [
    ["SQL", 50, "devicon-mysql-plain"],
    ["C++", 40, "devicon-cplusplus-plain"],
    ["JavaScript (lógica)", 70, "devicon-javascript-plain"],
    ["JSON y LocalStorage", 80, "💾"],
  ],
  Herramientas: [
    ["Git y GitHub", 75, "devicon-git-plain"],
    ["VS Code", 90, "devicon-vscode-plain"],
    ["Figma", 70, "devicon-figma-plain"],
    ["SASS (patrón 7-1)", 70, "devicon-sass-original"],
    ["Chrome DevTools", 75, "devicon-chrome-plain"],
  ],
  "Diseño y blandas": [
    ["Diseño UI responsive", 80, "🎨"],
    ["Accesibilidad web", 70, "♿"],
    ["Trabajo colaborativo", 0, "🤝"],
    ["Comunicación efectiva", 0, "💬"],
    ["Resolución de problemas", 0, "🧩"],
    ["Aprendizaje autónomo", 0, "🚀"],
  ],
};

export const proyectos = [
  {
    titulo: "Alke Wallet",
    tipo: "Billetera digital · Académico",
    icono: "💳",
    color: "linear-gradient(135deg,#123a5c,#0f6db3)",
    texto:
      "Simulador con login, saldo, depósitos, envío a contactos e historial. Arquitectura con un módulo de datos compartido y persistencia en LocalStorage.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "jQuery"],
    demo: "https://niino777.github.io/Alke-Wallet/",
    repo: "https://github.com/niino777",
  },
  {
    titulo: "BookList SPA",
    tipo: "Catálogo de libros · Módulo 6",
    icono: "📚",
    color: "linear-gradient(135deg,#7f1d1d,#f87171)",
    texto:
      "SPA con Vue 3, Vue Router y Vue CLI para Editorial Nova: catálogo con filtro, detalle por ruta dinámica, formulario con v-model, sesión simulada con rutas protegidas y datos guardados en localStorage.",
    tech: ["Vue 3", "Vue Router", "Vue CLI", "localStorage"],
    demo: "https://niino777.github.io/booklist-spa/",
    repo: "https://github.com/niino777/booklist-spa",
  },
  {
    titulo: "Hecho · Gestor de tareas",
    tipo: "App de tareas · Curso Trainee",
    icono: "✅",
    color: "linear-gradient(135deg,#0b5d4b,#5db9f6)",
    texto:
      "Crea, edita y completa tareas con etiquetas, colores, cuenta regresiva y hora de Chile. Exporta a calendario, importa datos desde una API y tiene modo claro/oscuro. JavaScript ES6+ con clases, sin frameworks JS.",
    tech: ["JavaScript ES6+", "Bootstrap 5", "Fetch API", "localStorage"],
    demo: "https://niino777.github.io/gestor-tareas/",
    repo: "https://github.com/niino777/gestor-tareas",
  },
  {
    titulo: "MenteMoneda - SmartBudget",
    tipo: "Landing de finanzas · Módulo 3",
    icono: "📊",
    color: "linear-gradient(135deg,#0b5d4b,#34d399)",
    texto:
      "Landing responsive con metodología BEM, SASS con patrón 7-1, navbar, cards y modal de Bootstrap manteniendo la identidad de marca.",
    tech: ["HTML5", "SASS", "BEM", "Bootstrap"],
    demo: "https://niino777.github.io/SmartBudget/",
    repo: "https://github.com/niino777/SmartBudget",
  },

  {
    titulo: "Weather Dashboard",
    tipo: "Consumo de API · Personal",
    icono: "⛅",
    color: "linear-gradient(135deg,#7a4a1e,#d9a06a)",
    texto:
      "Consulta el clima con Fetch, maneja estados de carga y error, y actualiza el DOM de forma dinámica.",
    tech: ["JavaScript", "Fetch", "REST API"],
    demo: "",
    repo: "https://github.com/niino777",
  },
  {
    titulo: "Gestión de estudiantes y notas",
    tipo: "Fundamentos de JavaScript · Módulo 3",
    icono: "🧮",
    color: "linear-gradient(135deg,#1e2a28,#a78bfa)",
    texto:
      "Aplicación que gestiona estudiantes, calcula promedios y separa aprobados y reprobados. Aplica variables, condicionales, ciclos, funciones, arreglos y objetos, con validación completa de entradas.",
    tech: [
      "JavaScript ES6+",
      "Funciones",
      "Arreglos y objetos",
      "Validaciones",
    ],
    demo: "https://niino777.github.io/Console_app/",
    repo: "https://github.com/niino777/Console_app",
  },
];

export const caso = {
  titulo: "Alke Wallet",
  subtitulo:
    "Una billetera digital donde cinco pantallas comparten un único estado.",
  metricas: [
    [5, "", "pantallas conectadas"],
    [1, "", "fuente única de verdad"],
    [40, "%", "menos CSS duplicado"],
    [95, "+", "Lighthouse accesibilidad"],
    [0, "", "saltos de diseño (CLS)"],
  ],
  puntos: [
    [
      "📝",
      "Descripción",
      "Aplicación web que simula una billetera digital completa: inicio de sesión, registro mediante modal, saldo, depósitos, envío de dinero a contactos, historial de movimientos y un gráfico de gastos por categoría. Todo es simulado, sin backend.",
    ],
    [
      "🎯",
      "Desafío principal",
      "Que cinco pantallas independientes mostraran siempre el mismo saldo y el mismo historial sin duplicar lógica, y que el estilo se mantuviera coherente en todas, con contenido que aparece dinámicamente sin mover el diseño.",
    ],
    [
      "💡",
      "Solución propuesta",
      "Un módulo compartido (wallet-storage.js) que concentra saldo e historial en LocalStorage y expone funciones simples. En CSS, una hoja base (theme.css) más una hoja por pantalla y componentes reutilizables (wallet-btn, wallet-card, wallet-input). Los modales de Bootstrap reemplazaron a prompt() y se reservó altura mínima para los mensajes dinámicos.",
    ],
    [
      "🛠️",
      "Herramientas",
      "HTML5, CSS3 con variables, Bootstrap 5, JavaScript, jQuery, LocalStorage, Git/GitHub y GitHub Pages para el despliegue.",
    ],
    [
      "📚",
      "Aprendizajes",
      "Separar estilos base y de página; pensar la arquitectura de carpetas y rutas antes de programar; centralizar el estado en un solo lugar; evitar saltos de diseño con min-height; y elegir una tipografía (Inter) con cifras tabulares para alinear montos.",
    ],
    [
      "🧰",
      "Habilidades aplicadas",
      "HTML semántico, Flexbox y Grid, manipulación del DOM, manejo de eventos, persistencia con JSON en LocalStorage, validación de formularios, diseño responsive, control de versiones y despliegue.",
    ],
    [
      "⭐",
      "¿Por qué este proyecto?",
      "Es donde mi crecimiento se nota: pasé de páginas sueltas a una aplicación con arquitectura, estado compartido, componentes reutilizables y decisiones de diseño que puedo justificar. Además está publicado y cualquiera puede probarlo.",
    ],
  ],
  codigo: `// js/wallet-storage.js · fuente única de verdad
const CLAVE = 'alke-wallet';

export function leer() {
  return JSON.parse(localStorage.getItem(CLAVE)) ?? { saldo: 0, movimientos: [] };
}

export function registrar(tipo, monto, detalle) {
  const datos = leer();
  datos.saldo += tipo === 'deposito' ? monto : -monto;
  datos.movimientos.unshift({ tipo, monto, detalle, fecha: Date.now() });
  localStorage.setItem(CLAVE, JSON.stringify(datos));
  return datos;
}`,
};

export const certificaciones = [
  ["🎓", "Bootcamp Desarrollo Web Front-End", "Alkemy · 2025 – 2026"],
  ["🟢", "Introducción a Vue.js", "Alkemy · Componentes, props y Vuex"],
  ["🎨", "Interfaz de Usuario Web", "Alkemy · BEM, SASS 7-1, Bootstrap"],
  ["🔀", "Git y GitHub", "Alkemy · Flujo de ramas y pull requests"],
];

export const practicas = [
  [
    "🧱",
    "HTML semántico",
    "header, nav, main, section y footer; un solo h1 por página.",
  ],
  ["🎛️", "CSS mantenible", "Variables CSS, BEM y arquitectura SASS 7-1."],
  ["📱", "Mobile-first", "Flexbox, Grid y media queries en tres breakpoints."],
  [
    "♿",
    "Accesibilidad",
    "Foco visible, alt en imágenes, aria-label y prefers-reduced-motion.",
  ],
  [
    "📦",
    "Código modular",
    "Datos separados de la interfaz y componentes de una sola responsabilidad.",
  ],
  [
    "🔀",
    "Git ordenado",
    "Commits claros, ramas por funcionalidad y README en cada repositorio.",
  ],
];

export const foda = {
  Fortalezas: [
    "Bases sólidas de HTML semántico y CSS (Flexbox y Grid)",
    "Proyectos publicados y navegables",
    "Orden y modularidad en el código",
    "Sensibilidad por la accesibilidad y el diseño",
    "Aprendizaje autónomo y trabajo colaborativo",
  ],
  Debilidades: [
    "JavaScript avanzado y asincronía",
    "Experiencia con frameworks en proyectos reales",
    "Testing automatizado",
    "Inglés técnico más fluido",
    "SQL y C++ en nivel exploratorio",
  ],
  Oportunidades: [
    "Alta demanda de perfiles junior en front-end",
    "Crecimiento del trabajo remoto",
    "Vue y React muy solicitados",
    "Open source como vitrina",
    "Empresas que valoran accesibilidad y UX",
  ],
  Amenazas: [
    "Mucha competencia entre perfiles junior",
    "Ofertas que piden experiencia previa",
    "Cambio constante de herramientas",
    "Automatización de tareas simples con IA",
    "Procesos de selección largos",
  ],
};
export const fodaMeta = {
  Fortalezas: ["💪", "var(--menta)"],
  Debilidades: ["🔧", "var(--ambar)"],
  Oportunidades: ["🌱", "var(--azul)"],
  Amenazas: ["⚠️", "var(--rosa)"],
};

// Redes: [nombre, clase Devicon, URL]
export const redes = [
  ["GitHub", "devicon-github-original", "https://github.com/niino777"],
  ["LinkedIn", "devicon-linkedin-plain", "https://linkedin.com/in/niino777"],
  ["Figma", "devicon-figma-plain", "https://www.figma.com/@niino777"],
  ["Behance", "devicon-behance-plain", "https://www.behance.net/niino777"],
  ["CodePen", "devicon-codepen-plain", "https://codepen.io/niino777"],
];

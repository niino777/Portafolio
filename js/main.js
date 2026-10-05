import { createApp, ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue';
import { perfil, habilidades, proyectos, caso, certificaciones, practicas, foda, fodaMeta, redes } from './data.js';

/* Directiva v-reveal: agrega la clase "visto" cuando el elemento entra en pantalla */
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visto'); observador.unobserve(e.target); } });
}, { threshold: 0.15 });
const reveal = { mounted: (el, b) => { el.classList.add('reveal'); el.style.setProperty('--d', (b.value || 0) * 80 + 'ms'); observador.observe(el); } };

const Icono = {
  props: { i: String },
  template: '<i v-if="i.startsWith(\'devicon\')" :class="i + \' colored\'" aria-hidden="true"></i><span v-else aria-hidden="true">{{ i }}</span>'
};

const FraseRotativa = {
  props: { frases: Array },
  template: '<span class="frase" :key="i">{{ frases[i] }}</span>',
  setup(props) {
    const i = ref(0);
    let id;
    onMounted(() => { id = setInterval(() => { i.value = (i.value + 1) % props.frases.length; }, 2200); });
    onBeforeUnmount(() => clearInterval(id));
    return { i };
  }
};

/* Número que cuenta hasta su valor cuando aparece en pantalla */
const Contador = {
  props: { a: Number, sufijo: String },
  template: '<span ref="el">{{ n }}{{ sufijo }}</span>',
  setup(props) {
    const n = ref(0), el = ref(null);
    onMounted(() => {
      const io = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const inicio = performance.now();
        const paso = (t) => {
          const k = Math.min((t - inicio) / 1200, 1);
          n.value = Math.round(props.a * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(paso);
        };
        requestAnimationFrame(paso);
      });
      io.observe(el.value);
    });
    return { n, el };
  }
};

const Habilidades = {
  components: { Icono },
  directives: { reveal },
  template: `
    <div>
      <div class="tabs" role="tablist">
        <button v-for="g in grupos" :key="g" role="tab" :aria-selected="g === activo" :class="{ activa: g === activo }" @click="activo = g">{{ g }}</button>
      </div>
      <div class="grilla-hab" :key="activo">
        <div v-for="([n, nivel, ic], k) in lista" :key="n" class="hab" v-reveal="k">
          <div class="hab-cabeza"><icono :i="ic" class="hab-ico" /><strong>{{ n }}</strong><span v-if="nivel" class="pct">{{ nivel }}%</span></div>
          <div v-if="nivel" class="barra-nivel" role="img" :aria-label="n + ' ' + nivel + '%'"><i :style="{ '--n': nivel + '%' }"></i></div>
        </div>
      </div>
    </div>`,
  setup() {
    const grupos = Object.keys(habilidades);
    const activo = ref(grupos[0]);
    return { grupos, activo, lista: computed(() => habilidades[activo.value]) };
  }
};

const Proyectos = {
  template: `
    <div class="grilla-proyectos">
        <article v-for="p in lista" :key="p.titulo" class="proyecto">
          <div class="proyecto-img" :style="{ background: p.color }"><span aria-hidden="true">{{ p.icono }}</span></div>
          <div class="proyecto-cuerpo">
            <p class="tipo">{{ p.tipo }}</p>
            <h3>{{ p.titulo }}</h3>
            <p>{{ p.texto }}</p>
            <ul class="chips"><li v-for="t in p.tech" :key="t">{{ t }}</li></ul>
            <div class="acciones">
              <a v-if="p.demo" class="btn" :href="p.demo" target="_blank" rel="noopener">Ver sitio</a>
              <a class="btn btn-linea" :href="p.repo" target="_blank" rel="noopener">Código</a>
            </div>
          </div>
        </article>
    </div>`,
  setup: () => ({ lista: proyectos })
};

const Contacto = {
  template: `
    <form class="form" @submit.prevent="enviar" novalidate>
      <label>Nombre <input v-model.trim="f.nombre" autocomplete="name"></label>
      <label>Correo <input v-model.trim="f.correo" type="email" autocomplete="email"></label>
      <label>Mensaje <textarea v-model.trim="f.mensaje" rows="4"></textarea></label>
      <p class="error" role="alert">{{ error }}</p>
      <button class="btn" type="submit">Enviar mensaje</button>
    </form>`,
  setup() {
    const f = reactive({ nombre: '', correo: '', mensaje: '' });
    const error = ref('');
    function enviar() {
      if (!f.nombre || !/^\S+@\S+\.\S+$/.test(f.correo) || f.mensaje.length < 10) {
        error.value = 'Completa tu nombre, un correo válido y un mensaje de al menos 10 caracteres.';
        return;
      }
      error.value = '';
      const asunto = encodeURIComponent('Contacto desde tu portafolio: ' + f.nombre);
      const cuerpo = encodeURIComponent(f.mensaje + '\n\n' + f.nombre + ' · ' + f.correo);
      location.href = `mailto:${perfil.email}?subject=${asunto}&body=${cuerpo}`;
    }
    return { f, error, enviar };
  }
};

const App = {
  components: { FraseRotativa, Contador, Icono, Habilidades, Proyectos, Contacto },
  directives: { reveal },
  template: `
    <div class="progreso" :style="{ width: progreso + '%' }"></div>
    <header class="barra">
      <a class="logo" href="#inicio">&lt;FM /&gt;</a>
      <button class="hamburguesa" :class="{ abierto }" :aria-expanded="abierto" aria-controls="menu" aria-label="Abrir menú" @click="abierto = !abierto">
        <span></span><span></span><span></span>
      </button>
      <nav id="menu" :class="{ abierto }" aria-label="Principal">
        <a v-for="[id, n] in enlaces" :key="id" :href="'#' + id" @click="abierto = false">{{ n }}</a>
      </nav>
    </header>

    <main id="contenido">
      <section id="inicio" class="hero">
        <div class="hero-texto">
          <p class="tipo"><span class="punto"></span>{{ p.rol }} · {{ p.ciudad }}</p>
          <h1><span class="degradado">{{ p.nombre }}</span></h1>
          <p class="bajada">Construyo <frase-rotativa :frases="p.frases" /> con HTML, CSS, JavaScript y Vue.</p>
          <div class="acciones">
            <a class="btn" href="#proyectos">Ver proyectos</a>
            <a class="btn btn-linea" :href="p.cv" download>Descargar CV</a>
          </div>
        </div>
        <div class="editor" aria-hidden="true">
          <div class="editor-barra"><i></i><i></i><i></i><span>portafolio.js</span></div>
          <pre v-pre><code><span class="k">const</span> dev = {
  nombre: <span class="s">'Felipe Muñoz'</span>,
  rol: <span class="s">'Front-End Trainee'</span>,
  stack: [<span class="s">'HTML'</span>, <span class="s">'CSS'</span>, <span class="s">'JS'</span>, <span class="s">'Vue'</span>],
  aprendiendo: [<span class="s">'SQL'</span>, <span class="s">'C++'</span>],
  disponible: <span class="b">true</span>
};

dev.<span class="f">contratar</span>(); <span class="c">// ¡hablemos!</span></code></pre>
        </div>
      </section>

      <section id="sobre-mi" class="panel" v-reveal>
        <h2><span class="ico">👋</span> Sobre mí</h2>
        <div class="dos-col">
          <img class="foto" src="img/felipe.jpg" alt="Retrato de Felipe Muñoz" width="320" height="400">
          <div>
            <p>Soy desarrollador Front-End trainee en Santiago. Me formé en un bootcamp de desarrollo web y sigo practicando con proyectos personales y colaborativos.</p>
            <p>Me interesa crear interfaces claras, accesibles y responsivas, trabajar en equipo y aprender de procesos reales de desarrollo.</p>
            <ul class="datos">
              <li><strong>📍 Ubicación</strong> Santiago, Chile</li>
              <li><strong>⏱️ Disponibilidad</strong> Inmediata</li>
              <li><strong>🌎 Idiomas</strong> Español nativo · Inglés técnico</li>
              <li><strong>✨ Intereses</strong> Desarrollo web, UX, open source</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="habilidades" class="panel" v-reveal><h2><span class="ico">⚙️</span> Habilidades</h2><habilidades /></section>
      <section id="proyectos" class="panel" v-reveal><h2><span class="ico">🚀</span> Proyectos</h2><proyectos /></section>

      <section id="caso-de-estudio" class="panel panel-caso" v-reveal>
        <h2><span class="ico">🔍</span> Caso de estudio: {{ caso.titulo }}</h2>
        <p class="intro">{{ caso.subtitulo }}</p>
        <div class="metricas">
          <div v-for="([v, s, e], k) in caso.metricas" :key="e" class="metrica" v-reveal="k">
            <strong><contador :a="v" :sufijo="s" /></strong><span>{{ e }}</span>
          </div>
        </div>
        <div class="grilla-caso">
          <article v-for="([ic, t, x], k) in caso.puntos" :key="t" class="bloque" v-reveal="k % 3">
            <h3><span aria-hidden="true">{{ ic }}</span> {{ t }}</h3><p>{{ x }}</p>
          </article>
        </div>
        <div class="editor editor-ancho">
          <div class="editor-barra"><i></i><i></i><i></i><span>wallet-storage.js</span></div>
          <pre tabindex="0"><code>{{ caso.codigo }}</code></pre>
        </div>
      </section>

      <section id="formacion" class="panel" v-reveal>
        <h2><span class="ico">🎓</span> Formación y certificaciones</h2>
        <div class="grilla">
          <div v-for="([ic, t, d], k) in certificaciones" :key="t" class="mini" v-reveal="k"><span class="mini-ico">{{ ic }}</span><h3>{{ t }}</h3><p>{{ d }}</p></div>
        </div>
        <h3 class="sub">Buenas prácticas</h3>
        <div class="grilla">
          <div v-for="([ic, t, d], k) in practicas" :key="t" class="mini" v-reveal="k"><span class="mini-ico">{{ ic }}</span><h3>{{ t }}</h3><p>{{ d }}</p></div>
        </div>
      </section>

      <section id="foda" class="panel" v-reveal>
        <h2><span class="ico">🧭</span> Análisis FODA personal</h2>
        <div class="grilla foda-grilla">
          <article v-for="(items, k, n) in foda" :key="k" class="foda-card" :style="{ '--c': meta[k][1] }" v-reveal="n">
            <h3><span aria-hidden="true">{{ meta[k][0] }}</span> {{ k }}</h3>
            <ul><li v-for="x in items" :key="x">{{ x }}</li></ul>
          </article>
        </div>
      </section>

      <section id="contacto" class="panel" v-reveal>
        <h2><span class="ico">✉️</span> Contacto</h2>
        <div class="dos-col dos-iguales">
          <div>
            <p>Estoy disponible para sumarme a un equipo como Front-End trainee. Escríbeme y conversamos.</p>
            <ul class="datos">
              <li><a :href="'mailto:' + p.email">📧 {{ p.email }}</a></li>
              <li><a :href="'tel:' + p.telefono.replace(/\\s/g, '')">📱 {{ p.telefono }}</a></li>
            </ul>
          </div>
          <contacto />
        </div>
      </section>
    </main>

    <footer class="pie">
      <p class="pie-titulo">Encuéntrame en</p>
      <ul class="redes">
        <li v-for="[n, ic, url] in redes" :key="n"><a :href="url" target="_blank" rel="noopener" :aria-label="n"><i :class="ic" aria-hidden="true"></i><span>{{ n }}</span></a></li>
      </ul>
      <p>© {{ anio }} {{ p.nombre }} · Hecho con Vue 3, HTML y CSS</p>
    </footer>`,
  setup() {
    const abierto = ref(false), progreso = ref(0);
    const enlaces = [['sobre-mi', 'Sobre mí'], ['habilidades', 'Habilidades'], ['proyectos', 'Proyectos'], ['caso-de-estudio', 'Caso de estudio'], ['foda', 'FODA'], ['contacto', 'Contacto']];
    const alScroll = () => { progreso.value = (scrollY / (document.body.scrollHeight - innerHeight)) * 100; };
    onMounted(() => addEventListener('scroll', alScroll, { passive: true }));
    onBeforeUnmount(() => removeEventListener('scroll', alScroll));
    return { p: perfil, caso, certificaciones, practicas, foda, meta: fodaMeta, redes, abierto, progreso, enlaces, anio: new Date().getFullYear() };
  }
};

createApp(App).mount('#app');

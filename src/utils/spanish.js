import packageJson from '../../package.json'
const es = {
  stopRepeated:
    "La aplicación ya está detenida, escribe 'init' y presiona 'enter' para correr la aplicación",
  isNotRunning:
    "La aplicación está detenida, escribe 'init' y presiona 'enter' para correr la aplicación",
  starting: "Empezando...",
  ready: "Listo",
  help: "Teclea un comando y luego presiona 'enter', puedes utilizar cualquiera de los siguientes comandos:",
  commandNotFound: "bash: Comando no encontrado",
  runHelp:
    "Para ver una lista de los comandos, teclea: 'help' y presiona 'enter' ",
  stopping: "Deteniendo...",
  stopped: "Aplicación detenida, regresa pronto!!!",
  initRepeated: "La aplicación ya está corriendo, teclea 'stop' para detener",
  wait: "IA generando respuesta...",
  languageAvailable:
    "Los únicos idiomas disponibles son  'es' para Español y 'en' para Inglés",
  currentLanguage: "El idioma actual es español",
  welcome: [
    "Bienvenido a mi website",
    `Version ${packageJson.version}`,
    "Soy un desarrolador creativo: si eres programador te gustará navegar mi página;",
    "si no, aprenderás un poco del mundo de la programación",
    " ",
    "teclea la palabra init y presiona enter",
  ],
  startInterview: "Pregúntame lo que quieras a través de la consola",
  welcomeInterview: "Puedes preguntar lo que quieras porque funciona con AI",
  error: "Uuups, algo se le chispoteó a mi AI",
  firstInit: "First initialize the program running the command 'init'",
  continue: "click para continuar",
  letsTalk: "Hablemos a través de la consola inicia el modo entrevista",
  clickToExpand: "Click aquí para saber más",
  noData: "Tienes que escribir una pregunta",
  projects:"Algunos de mis proyectos",
  downloading:"Descargando..."
};

export default es;

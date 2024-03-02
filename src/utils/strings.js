import asciiDrawing from "./asciiDrawing";
const strings = {
  en: {
    stopRepeated:
      "Aplication is already stopped, type 'init' and press 'enter' to run the aplication",
    isNotRunning:
      "Application is not running, type 'init' and press 'enter' to run the application",
    starting: "Starting...",
    ready: "Ready",
    help: "type a command and press enter, you can run any of the following commands:",
    commandNotFound: "bash: command not found",
    runHelp:
      "To see a list of supported commands, type: 'help' and press 'enter' ",
    stopping: "Stopping...",
    stopped: "Application stopped, come back soon!!!",
    initRepeated: "Application already running, type 'stop' ",
    wait: "Generando respuesta...",
    languageAvailable:
      "The only available languages are 'es' for Spanish and 'en' for English",
    currentLanguage: "The current language is English",
    welcome: [
      "Bienvenido a mi website",
      asciiDrawing,
      "version 1.0.0",
      "teclea la palabra init y presiona enter",
    ],
    startInterview: "Ask me anything throught the console",
    error: "Uuups, something went wrong with my AI",
  },
  es: {
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
    wait: "espera...",
    languageAvailable:
      "Los únicos idiomas disponibles son  'es' para Español y 'en' para Inglés",
    currentLanguage: "El idioma actual es español",
    welcome: [
      "Bienvenido a mi website",
      asciiDrawing,
      "version 1.0.0",
      "Soy un desarrolador creativo: si eres programador te gustará navegar mi página;",
      "si no, aprenderás un poco del mundo de la programación",
      " ",
      "teclea la palabra init y presiona enter",
    ],
  },
  startInterview:
    "Pregúntame lo que quieras a través de la consola ubicada en la parte baja de la pantalla",
  error: "Uuups, algo se le chispoteó a mi AI",
};
export default strings;

import packageJson from '../../package.json'
const en = {
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
  wait: "AI generating answer...",
  languageAvailable:
    "The only available languages are 'es' for Spanish and 'en' for English",
  currentLanguage: "The current language is English",
  welcome: [
    "Welcome to my website",
    `Version ${packageJson.version}`,
    "I'm a fullstack developer if you're a dev too, you'll like this site.",
    " ",
    "type 'init' and press enter",
  ],
  startInterview: "Ask me anything throught the console",
  error: "Uuups, something went wrong with my AI",
  firstInit: "First initialize the program running the command 'init'",
  welcomeInterview: "You can ask anything, this app is working with AI",
  continue: "click to continue",
  letsTalk: "Let's talk throuth the console, type interview to start",
  clickToExpand: "Click here to expand this info",
  noData: "No data provided",
  projects:"Some of my projects",
  downloading:"Downloading..."
};

export default en;

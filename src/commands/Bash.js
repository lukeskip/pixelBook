import {
  setDialog,
  setConsole,
  setTerminal,
  cleanTerminal,
  setCategory,
  setPrompt,
  setErrorMode,
} from "../redux/actions";
import {
  questionRequest,
  showDialog,
  showError,
  run,
  getCommands,
  stop,
  consoleMessage,
  interview,
  question,
  init,
  delay,
  lang,
  help,
  download,
  strings,
} from "./index.js";

class Bash {
  constructor(dispatch, language = "en") {
    this.dispatch = dispatch;
    this.language = language;
    this.status = "stopped";
    this.initSpeed = 2000;
    this.questioning = false;
  }
}

Bash.prototype._showDialog = showDialog;
Bash.prototype._error = showError;
Bash.prototype.run = run;
Bash.prototype._getCommands = getCommands;
Bash.prototype.stop = stop;
Bash.prototype._consoleMessage = consoleMessage;
Bash.prototype._question = question;
Bash.prototype.interview = interview;
Bash.prototype.init = init;
Bash.prototype._delay = delay;
Bash.prototype.lang = lang;
Bash.prototype.help = help;
Bash.prototype.download = download;

export default Bash;

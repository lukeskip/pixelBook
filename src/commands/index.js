import {
  setDialog,
  setConsole,
  setTerminal,
  cleanTerminal,
} from "../redux/actions";

import strings from "../utils/strings";

import initAnimation from "./initAnimation";

class Bash {
  constructor(dispatch, language = "en") {
    this.dispatch = dispatch;
    this.language = language;
    this.status = "stopped";
    this.initSpeed = 2000;
  }

  // This is the entry function, it receives an input and gets the command it should run and tha arguments in case there are some
  run(input, dispatch) {
    let args = input.toString().trim().split(" ");
    const cmd = args.shift();
    args = args.join(" ");
    this[cmd] ? this[cmd](args) : this._error();
  }

  // This function gets a string and makes a request to the back side and show the dialog
  question(string) {
    if (this.status === "running") {
      return this._showDialog(string);
    } else {
      this.dispatch(setTerminal([strings[this.language].isNotRunning]));
    }
  }

  // This function fake a applications start and shows the scenario
  init(args) {
    if (this.status !== "running") {
      this._consoleMessage([strings[this.language].starting]);
      this._consoleMessage([initAnimation()]);
      this.status = "running";

      (async () => {
        await this._delay(strings[this.language].ready);
        this.help();
      })();

      return this.dispatch(setConsole("close"));
    } else {
      this._consoleMessage([[strings[this.language].initRepeated]]);
    }
  }

  // It shows the available commands in the console
  help(args) {
    this._consoleMessage([strings[this.language].help, this._getCommands()]);
  }

  // It allows to download the resumé in PDF, it receives a "flag" so it can deliver different versions of the resume
  download(args) {
    this.dispatch(setTerminal([string.wait]));
  }

  lang(language) {
    language = language.replace("-", "");
    if (!["es", "en"].includes(language))
      return this._consoleMessage([strings[this.language].languageAvailable]);
    if (language !== this.language) {
      this.language = language;
      this._consoleMessage([strings[this.language].currentLanguage]);
    }
  }

  // It fakes the application stop, and hide the scenario
  stop(args) {
    if (this.status === "running") {
      this.status = "stopped";
      this._consoleMessage(strings[this.language].stopping);
      (async () => {
        await this._delay([strings[this.language].stopped]);
        await this._delay([strings[this.language].stopped]);
      })();
      this.dispatch(setConsole("open"));
    } else {
      this.dispatch(setTerminal([strings[this.language].stopRepeated]));
    }
  }

  // It shows a message in the console delayed by a given time
  _delay(string, speed = this.initSpeed) {
    return new Promise((resolve) =>
      setTimeout(() => {
        this._consoleMessage(string);
        resolve();
      }, speed)
    );
  }

  // it shows a "console" message
  _consoleMessage(string) {
    if (Array.isArray(string)) {
      this.dispatch(setTerminal([...string]));
    } else {
      this.dispatch(cleanTerminal(string));
    }
  }

  // it shows a dialog of my alter ego
  _showDialog(string) {
    this.dispatch(setDialog(string));
  }

  // It gets the available commands
  _getCommands() {
    let commands = Object.getOwnPropertyNames(Object.getPrototypeOf(this));

    commands = commands.filter((item) => {
      return item !== "run" && item !== "constructor" && !item.startsWith("_");
    });

    return commands.join("  ");
  }

  // It shows an error in the console
  _error(message) {
    if (!message) {
      this._consoleMessage([
        strings[this.language].commandNotFound,
        strings[this.language].runHelp,
      ]);
    } else {
      this.consoleMessage([message]);
    }
  }
}
export default Bash;

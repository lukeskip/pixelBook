import {
  setDialog,
  setConsole,
  setTerminal,
  cleanTerminal,
} from "../redux/actions";

import strings from "../utils/strings";

import initAnimation from "./initAnimation";
class Bash {
  constructor(dispatch) {
    this.dispatch = dispatch;
    this.status = "stopped";
    this.initSpeed = 2000;
  }

  run(input, dispatch) {
    let args = input.toString().trim().split(" ");
    const cmd = args.shift();
    args = args.join(" ");
    this[cmd] ? this[cmd](args) : this._error();
  }

  question(args) {
    if (this.status === "running") {
      return this.dispatch(setDialog(args));
    } else {
      this.dispatch(setTerminal([strings.isNotRunning]));
    }
  }

  init(args) {
    this.dispatch(setTerminal([strings.starting]));
    this.dispatch(setTerminal([initAnimation()]));
    this.status = "running";
    setTimeout(() => {
      this.dispatch(cleanTerminal(strings.ready));
      setTimeout(() => {
        this.help();
      }, this.initSpeed / 2);
    }, this.initSpeed);

    return this.dispatch(setConsole("close"));
  }

  help(args) {
    this.dispatch(setTerminal([strings.help, this._getCommands()]));
  }

  stop(args) {
    if (this.status === "running") {
      this.status = "stopped";
      this.dispatch(cleanTerminal(strings.stopping));
      setTimeout(() => {
        this.dispatch(setTerminal([strings.stopped]));
      }, this.initSpeed);
      this.dispatch(setConsole("open"));
    } else {
      this.dispatch(setTerminal([strings.stopRepeated]));
    }
  }

  _getCommands() {
    let commands = Object.getOwnPropertyNames(Object.getPrototypeOf(this));

    commands = commands.filter((item) => {
      return item !== "run" && item !== "constructor" && !item.startsWith("_");
    });

    return commands.join("  ");
  }

  _error(message) {
    if (!message) {
      this.dispatch(setTerminal([strings.commandNotFound, strings.runHelp]));
    } else {
      this.dispatch(setTerminal([message]));
    }
  }
}

export default Bash;

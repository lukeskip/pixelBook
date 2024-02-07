import {
  setDialog,
  setConsole,
  setTerminal,
  cleanTerminal,
} from "../redux/actions";

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
      this.dispatch(
        setTerminal([
          "Application is not running, type 'init' and press 'enter' to run the application",
        ])
      );
    }
  }

  init(args) {
    this.dispatch(setTerminal(["starting..."]));
    this.dispatch(setTerminal([initAnimation()]));
    this.status = "running";
    setTimeout(() => {
      this.dispatch(cleanTerminal("ready"));
      setTimeout(() => {
        this.help();
      }, this.initSpeed / 2);
    }, this.initSpeed);

    return this.dispatch(setConsole("close"));
  }

  help(args) {
    this.dispatch(
      setTerminal([
        "type a command and press enter, you can run any of the following commands:",
        this._getCommands(),
      ])
    );
  }

  stop(args) {
    if (this.status === "running") {
      this.status = "stopped";
      this.dispatch(cleanTerminal("stopping..."));
      setTimeout(() => {
        this.dispatch(setTerminal(["Application stopped"]));
      }, this.initSpeed);
      this.dispatch(setConsole("open"));
    } else {
      this.dispatch(
        setTerminal([
          "Aplication is already stopped, type 'init' and press 'enter' to run the aplication",
        ])
      );
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
      this.dispatch(
        setTerminal([
          "bash: command not found",
          "To see a list of supported commands, type: 'help' and press 'enter' ",
        ])
      );
    } else {
      this.dispatch(setTerminal([message]));
    }
  }
}

export default Bash;

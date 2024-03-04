import strings from "../utils/strings";
// It shows the available commands in the console
export default function help(args) {
  this._consoleMessage([strings[this.language].help, this._getCommands()]);
}

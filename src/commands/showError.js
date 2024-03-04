import strings from "../utils/strings";
export default function showError(message) {
  if (!message) {
    this._consoleMessage([
      strings[this.language].commandNotFound,
      strings[this.language].runHelp,
    ]);
  } else {
    this.consoleMessage([message]);
  }
}

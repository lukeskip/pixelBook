import { setMode } from "../redux/actions";
import strings from "../utils/strings";
import initAnimation from "./initAnimation";
// This function fake a applications start and shows the scenario
export default function init(args) {
  if (this.status !== "running") {
    this._consoleMessage([strings[this.language].starting]);
    this._consoleMessage([initAnimation()]);
    this._delay(strings[this.language].letsTalk, "dialog", 3000);
    this.status = "running";

    (async () => {
      await this._delay(strings[this.language].ready);
      this.help();
    })();

    return this.dispatch(setMode("running"));
  } else {
    this._consoleMessage([[strings[this.language].initRepeated]]);
  }
}

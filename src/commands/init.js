import { setConsole, setMode } from "../redux/actions";
import strings from "../utils/strings";
import initAnimation from "./initAnimation";
// This function fake a applications start and shows the scenario
export default function init(args) {
  if (this.status !== "running") {
    this._consoleMessage([strings[this.language].starting]);
    this._consoleMessage([initAnimation()]);
    this._delay(
      "hablemos a través de la consola inicia el modo entrevista",
      "dialog",
      3000
    );
    this.status = "running";

    (async () => {
      await this._delay(strings[this.language].ready);
      this.help();
    })();
    this.dispatch(setMode("running"));

    return this.dispatch(setConsole("close"));
  } else {
    this._consoleMessage([[strings[this.language].initRepeated]]);
  }
}

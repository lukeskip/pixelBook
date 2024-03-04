import { setPrompt, setMode } from "../redux/actions";
import strings from "../utils/strings";
export default function interview() {
  if (this.status === "running") {
    this.questioning = true;
    this.dispatch(setPrompt("[interview]"));
    this.dispatch(setMode("interview"));
    this._showDialog([strings[this.language].startInterview]);
    this._consoleMessage(strings[this.language].welcomeInterview);
  } else {
    this._consoleMessage([strings[this.language].firstInit]);
  }
}

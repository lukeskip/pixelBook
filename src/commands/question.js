import strings from "../utils/strings";
import { setCategory } from "../redux/actions";
import questionRequest from "../apiRequest/questionRequest";
// This function gets a string and makes a request to the back side and show the dialog
export default function question(string) {
  if (this.status === "running") {
    this._consoleMessage(strings[this.language].wait);
    if (string) {
      (async () => {
        try {
          const request = await questionRequest(string, this.language);
          this._consoleMessage(strings[this.language].ready);
          this.dispatch(setCategory(request.data.category));
          return this._showDialog(request.data.answer);
        } catch (error) {
          console.log(error);
          this._consoleMessage(error.response.data.message);
          this._showDialog([strings[this.language].error]);
        }
      })();
    } else {
      this._consoleMessage(strings[this.language].noData);
    }
  } else {
    this._consoleMessage(strings[this.language].isNotRunning);
  }
}

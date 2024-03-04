// It fakes the application stop, and hide the scenario
export default function stop(args) {
  if (this.questioning === true) {
    this._consoleMessage(strings[this.language].stopping);
    (async () => {
      await this._delay([strings[this.language].stopped]);
    })();
    this.questioning = false;
    return this.dispatch(setPrompt("$"));
  }

  if (this.status === "running") {
    this.status = "stopped";
    this._consoleMessage(strings[this.language].stopping);
    (async () => {
      await this._delay([strings[this.language].stopped]);
    })();
    this.dispatch(setConsole("open"));
  } else {
    this.dispatch(setTerminal([strings[this.language].stopRepeated]));
  }
}

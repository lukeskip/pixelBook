// It shows a message in the console delayed by a given time
export default function delay(
  string,
  type = "console",
  speed = this.initSpeed
) {
  return new Promise((resolve) =>
    setTimeout(() => {
      if (type === "console") {
        this._consoleMessage(string);
      } else {
        this._showDialog([string]);
      }
      resolve();
    }, speed)
  );
}

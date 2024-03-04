import { setTerminal, cleanTerminal } from "../redux/actions";
// it shows a "console" message
export default function consoleMessage(string) {
  if (Array.isArray(string)) {
    this.dispatch(setTerminal([...string]));
  } else {
    this.dispatch(cleanTerminal(string));
  }
}

import { setDialog, setConsole, setTerminal } from "../redux/actions";
class Bash {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  run(input, dispatch) {
    let args = input.toString().trim().split(" ");
    const cmd = args.shift();
    args = args.join(" ");
    this[cmd] ? this[cmd](args) : this.error();
  }

  print(args) {
    return this.dispatch(setDialog(args));
  }

  init(args) {
    this.dispatch(setTerminal(["init"]));
    return this.dispatch(setConsole("close"));
  }

  stop(args) {
    this.dispatch(setTerminal(["stop"]));
    return this.dispatch(setConsole("open"));
  }
  error() {
    this.dispatch(setTerminal(["Ese comando no existe intenta nueva mente"]));
  }
}

export default Bash;

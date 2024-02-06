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

  question(args) {
    return this.dispatch(setDialog(args));
  }

  init(args) {
    this.dispatch(setTerminal(["init"]));
    return this.dispatch(setConsole("close"));
  }

  help(args) {
    this.dispatch(
      setTerminal([
        "type a command and press enter, you can run any of the following commands:",
        "command1 command2 command3",
      ])
    );
    return this.dispatch(setConsole("open"));
  }

  stop(args) {
    this.dispatch(setTerminal(["stop"]));
    return this.dispatch(setConsole("open"));
  }

  error(message) {
    if (!message) {
      this.dispatch(
        setTerminal([
          "bash: command not found",
          "To see a list of supported commands, run: help",
        ])
      );
    } else {
      this.dispatch(setTerminal([message]));
    }
  }
}

export default Bash;

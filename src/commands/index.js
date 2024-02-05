import { setDialog, setConsole } from "../redux/actions";
class Bash {
  constructor(command) {}

  run(input, dispatch) {
    let args = input.toString().trim().split(" ");
    const cmd = args.shift();
    args = args.join(" ");
    this[cmd]
      ? this[cmd](args, dispatch)
      : console.log("no existe ese comando");
  }

  print(args, dispatch) {
    return dispatch(setDialog(args));
  }

  init(args, dispatch) {
    return dispatch(setConsole("close"));
  }

  stop(args, dispatch) {
    return dispatch(setConsole("open"));
  }
}

export default Bash;

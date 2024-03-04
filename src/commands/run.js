// This is the entry function, it receives an input and gets the command it should run and tha arguments in case there are some
export default function run(input, dispatch) {
  let args = input.toString().trim().split(" ");
  const cmd = args.shift();
  args = args.join(" ");

  if (this[cmd]) {
    this[cmd](args);
  } else {
    if (this.questioning) {
      return this._question(input);
    } else {
      this._error();
    }
  }
}

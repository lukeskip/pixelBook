class Bash {
  constructor(command) {}

  run(input, callback) {
    let args = input.toString().trim().split(" ");
    const cmd = args.shift();
    args = args.join(" ");
    this[cmd]
      ? this[cmd](args, callback)
      : console.log("no existe ese comando");
  }

  print(args, callback) {
    callback(args);
  }
}

export default Bash;

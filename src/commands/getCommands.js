// It gets the available commands
export default function getCommands() {
  let commands = Object.getOwnPropertyNames(Object.getPrototypeOf(this));

  commands = commands.filter((item) => {
    return item !== "run" && item !== "constructor" && !item.startsWith("_");
  });

  return commands.join("  ");
}

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", (data) => {
    handleUserInput(data);
  });
  return stdin;
};

let handleUserInput = function(data) {
  if (data === '\u0003') { // ctrl+c = "\u0003"
    process.exit();
  }
};

module.exports = { setupInput };
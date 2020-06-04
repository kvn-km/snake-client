let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", (data) => {
    handleUserInput(data);
  });
  connection = conn;
  return stdin;
};

// connection.write("Move: up");

let handleUserInput = function(data) {
  if (data === '\u0003') { // ctrl+c = "\u0003"
    process.exit();
  }
  if (data === "w") {
    connection.write("Move: up");
    connection.write("Move: up");
  }
  if (data === "s") {
    connection.write("Move: down");
    connection.write("Move: down");
  }
  if (data === "a") {
    connection.write("Move: left");
    connection.write("Move: left");
  }
  if (data === "d") {
    connection.write("Move: right");
    connection.write("Move: right");
  }






};




module.exports = { setupInput };
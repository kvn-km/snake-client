let connection;
const { moveUp, moveDown, moveRight, moveLeft } = require("./constants");

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
    connection.write(moveUp);
    connection.write(moveUp);
  }
  if (data === "s") {
    connection.write(moveDown);
    connection.write(moveDown);
  }
  if (data === "a") {
    connection.write(moveLeft);
    connection.write(moveLeft);
  }
  if (data === "d") {
    connection.write(moveRight);
    connection.write(moveRight);
  }
  if (data === "q") {
    connection.write("Say: Sss~");
  }
  if (data === "e") {
    connection.write("Say: Rrr~");
  }






};




module.exports = { setupInput };
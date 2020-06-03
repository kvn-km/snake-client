const net = require("net");


const connect = function() {

  const conn = net.createConnection({
    host: "135.23.222.148",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("connected.");
    conn.write('KVN');
  });

  conn.on('connect', () => {
    conn.write('Name: KVN');
  });

  conn.on('data', (data) => {
    console.log("from server:", data.toString());
  });

  conn.on('end', () => {
    console.log('disconnected from server');
  });




  return conn;
};

module.exports = { connect };
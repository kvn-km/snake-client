const net = require("net");
const { ip, port } = require("./constants");

const connect = function() {

  const conn = net.createConnection({
    host: ip,
    port: port
  });

  conn.on("connect", () => {
    console.log("connected.");
    conn.write('Name: KVN');
  });

  conn.on('data', (data) => {
    console.log("Server says -> ", data.toString());
  });

  conn.on('end', () => {
    console.log('disconnected from server');
  });

  return conn;
};

module.exports = { connect };
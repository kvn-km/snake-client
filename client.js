const net = require("net");


const connect = function() {

  const conn = net.createConnection({
    host: "135.23.222.148",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("connected.");
    conn.write('Name: KVN');
  });

  // conn.on('connect', () => {
  //   let x = 50;
  //   while (x < 10000) {
  //     setTimeout(() => {
  //       conn.write("Move: up");
  //     }, x);
  //     x += 50;
  //   };
  // });

  conn.on('data', (data) => {
    console.log("from server:", data.toString());
  });

  conn.on('end', () => {
    console.log('disconnected from server');
  });




  return conn;
};

module.exports = { connect };
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting...");

setupInput(connect());
// connect(); // moved connect call into setupInput
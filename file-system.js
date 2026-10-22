const fs = require("fs");

// 1. Create welcome.txt containing one line
fs.writeFileSync("welcome.txt", "Hello Node");

// 2. Read the file and log its content
const data = fs.readFileSync("welcome.txt", "utf8");
console.log(data);

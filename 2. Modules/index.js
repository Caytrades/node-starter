//This will allow us to use that fuction from the greet.js
//in our index.js file

const greet = require("./greet");
const name = require("./name");
const bye = require("./bye")
const {x, y, z} = require("./peoples");

name(x)
greet(y);
bye(z)

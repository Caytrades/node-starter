// Module Wrapper 
//Whenever we execute our JS code with Node i put in a function known as a module wrappper

(function(exports, require, module, __filename, __dirname) {
    // <code>
    console.log("Hello from IIFE");//Immediatitely Invoked Function Expression
})();

//<code>
// console.log("Hello World"); 
// console.log(__filename); 
// console.log(__dirname); 
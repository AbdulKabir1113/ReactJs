// default import 

// import add from "./module1.js"
// add()

// named import

// import {a,b,add} from "./module1.js"

// console.log(a);
// console.log(b);
// console.log(add());


// named import
import * as data from "./module1.js"
console.log(data.a);
console.log(data.b);
console.log(data.add());
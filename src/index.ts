import { factory } from "./factory";
import { Observer } from "./observer";
import { Proxy } from "./proxy";
import { singleton } from "./Singleton";

console.log('singleton running....');
singleton();
console.log('factory running....');
factory();

console.log('observer running');
Observer();


console.log('proxy running');
Proxy();


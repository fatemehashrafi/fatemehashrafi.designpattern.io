import { badway } from "./bad-way";
import { Builder } from "./builder";
import { DuperAnimal } from "./decorator";
import { diContainer } from "./di-container";
import { factory } from "./factory";
import { Observer } from "./observer";
import { Proxy } from "./proxy";
import { singleton } from "./Singleton";
import { Strategy } from "./strategy";

// console.log('singleton running....');
// singleton();


// console.log('factory running....');
// factory();

// console.log('observer running');
// Observer();


// console.log('proxy running');
// Proxy();

// console.log('badway running ...')
// badway();

// diContainer()

console.log('builder running .....');
Builder()

console.log('decorator running .....');
DuperAnimal()

console.log('Strategy running .....');
Strategy()
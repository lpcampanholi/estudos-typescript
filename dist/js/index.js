"use strict";
// string, boolean, number, ...
let x = 10;
x = 29;
console.log(x);
// inferencia x annotation
let y = 12; // atribuição por inferência
// y = "teste";
let z = 12; // atribuição por annotation
// tipos básicos
let firstName = "Luis";
let age = 30;
const isAdmin = true;
// String != string
console.log(typeof firstName);
firstName = "João";
// Object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
console.log(myNumbers.push(5));
console.log(myNumbers);
// tuplas
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
// myTuple = [true, false, true];
// Object literals -> {prop: value}
const user = {
    name: "Pedro",
    age: 18
};
console.log(user);
console.log(user.name);
// user.job = "programador";
// any
let a = 0;
a = "teste";
a = true;
a = 20;
a = [];
console.log(a);
// union type
let id = 10;
id = 200;
const userId = 10;
const productId = "00001";
const shirId = 123;
// enum
// tamanho de roupas()
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "m\u00E9dio";
    Size["G"] = "grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G
};
console.log(camisa);
// Literal types
let teste;
// teste = "outrovalor";
teste = null;
// Funcoes
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));

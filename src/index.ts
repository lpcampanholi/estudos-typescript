// string, boolean, number, ...
let x: number = 10;

x = 29;

console.log(x);


// inferencia x annotation
let y = 12; // atribuição por inferência
// y = "teste";

let z: number = 12; // atribuição por annotation

// tipos básicos
let firstName: string = "Luis";
let age: number = 30;
const isAdmin: boolean = true;

// String != string

console.log(typeof firstName);

firstName = "João";

// Object
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
console.log(myNumbers.push(5));
console.log(myNumbers);

// tuplas
let myTuple: [number, string, string[]];
myTuple = [5, "teste", ["a", "b"]];
// myTuple = [true, false, true];

// Object literals -> {prop: value}
const user: {name: string, age: number} = {
    name: "Pedro",
    age: 18
}
console.log(user);
console.log(user.name);
// user.job = "programador";

// any
let a: any = 0;
a = "teste";
a = true;
a = 20;
a = [];
console.log(a);

// union type
let id: string | number = 10;
id = 200;
// id = true;
// id = [];

// type alias

type myIdType = number | string;

const userId: myIdType = 10;
const productId: myIdType = "00001";
const shirId: myIdType = 123;

// enum
// tamanho de roupas()
enum Size {
    P = "pequeno",
    M = "médio",
    G = "grande"
}
const camisa = {
    name: "Camisa gola V",
    size: Size.G
}
console.log(camisa);

// Literal types
let teste: "autenticado" | null;
// teste = "outrovalor";
teste = null;

// Funcoes
function sum(a: number, b: number) {
    return a + b;
}
console.log(sum(12, 12));

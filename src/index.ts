// string, boolean, number, ...
let x: number = 10;

x = 29;

console.log(x);

// Atribuição por inferencia x annotation
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

// Tuplas
let myTuple: [number, string, string[]];
myTuple = [5, "teste", ["a", "b"]];
// myTuple = [true, false, true];

// Object literals -> {prop: value}
const user: { name: string, age: number } = {
    name: "Pedro",
    age: 18
}
console.log(user);
console.log(user.name);
// user.job = "programador";

// Any
let a: any = 0;
a = "teste";
a = true;
a = 20;
a = [];
console.log(a);

// Union Type
let id: string | number = 10;
id = 200;
// id = true;
// id = [];

// Type Alias
type myIdType = number | string;

const userId: myIdType = 10;
const productId: myIdType = "00001";
const shirId: myIdType = 123;

// Enum
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

// Literal Types
let teste: "autenticado" | null;
// teste = "outrovalor";
teste = null;

// Funcoes
function sum(a: number, b: number) {
    return a + b;
}
console.log(sum(12, 12));

function sayHelloTo(name: string): string {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Luis"));

function logger(msg: string): void {
    console.log(msg);
}
logger("mensagem");

function greeting(name: string, greet?: string) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    } else {
        console.log(`Hello ${name}`);
    }
}
greeting("jose");
greeting("pedro", "sir");

// Interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 1, n2: 2 }));

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2;
}

console.log(multiplyNumbers({ n1: 2, n2: 4 }));

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10
}
console.log(multiplyNumbers(someNumbers));

// Narrowing
// Checagem de tipos
function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(12);
doSomething(true);


// Generics
function showArrayItems<T>(array: T[]) {
    array.forEach(item => {
        console.log(`Item: ${item}`);
    })
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArrayItems(a1);
showArrayItems(a2);


// Classes
class User {
    name;
    role;
    isApproved;

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName(): void {
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserRole(canShow: boolean): void {
        if(canShow) {
            console.log(`A função do usuário é: ${this.role}`);
            return;
        }
        console.log("Informação restrita!");
    }
}

const zeca = new User("zeca", "admin", false);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);

// Interfaces em clases
interface IVehicle {
    brand: string,
    showBrand(): void
}

class Car implements IVehicle {
    brand;
    wheels;

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;

    }
    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}

const kombi = new Car("Volks", 4);
kombi.showBrand();

// Herança
class SuperCar extends Car {
    engine;

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;
    }
}

const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);

// Decorators
function BaseParamters() {
    return function <T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@BaseParamters()
class Person {
    name;

    constructor(name: string) {
        this.name = name;
    }
}

const sam = new Person("Sam");
console.log(sam);

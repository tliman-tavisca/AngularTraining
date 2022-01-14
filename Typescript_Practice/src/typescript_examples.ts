// // Array function examples
// const pizzas = [
//   {
//     name: "Large",
//     toppings: ["ExtraSauce", "Cheese", "Panner"],
//   },
// ];

// const mappedPizzas = pizzas.map((pizza, index) => {
//   return pizza.name.toUpperCase() + index;
// });

// const refmappedPizzas = pizzas.map((pizza) => pizza.name.toUpperCase());

// //console.log(mappedPizzas);

// //console.log(refmappedPizzas);

// const pizza = {
//   name: "Medium",
//   getName: function () {
//     const self = this;
//     setTimeout(function () {
//       console.log(self);
//     }, 100);
//   },
// };

// const pizzaNew = {
//   name: "new",
//   getName: function () {
//     setTimeout(() => {
//       console.log(this);
//     }, 100);
//   },
// };

// const final = {
//   name: "Final",
//   getName: () => final.name,
// };

// console.log(pizza.getName());
// console.log(pizzaNew.getName());
// console.log(final.getName());

// // Default parameter Examples
// function mulltply(a: number, b: number = 2) {
//   return a * b;
// }

// console.log(mulltply(10, 5));
// console.log(mulltply(10));

// // Object literal examples

// const Exppizza = {
//   name: "Pepperni",
//   prize: 50,
//   getName() {
//     return this.name;
//   },
// };

// console.log(Exppizza.getName());

// const toppings = ["Cheese"];

// const order = { Exppizza, toppings };
// //console.log(order);

// function crateOrder(a: any, b: any) {
//   return { a, b };
// }

// console.log(crateOrder(Exppizza, toppings));

// // Reduce and Rest parameters (...)

// function Sumall(arr: Array<any>) {
//   return arr.reduce((prev: any, next: any) => prev + next);
// }

// const sum = Sumall([1, 2, 3]);
// console.log(sum);

// function SumallWithArr(...arr: any) {
//   return arr.reduce((prev: any, next: any) => prev + next);
// }

// const sumWithArr = SumallWithArr(1, 2);
// console.log(sumWithArr);

// function SumallWitDiff(message: string, ...arr: any) {
//   console.log(message);
//   return arr.reduce((prev: any, next: any) => prev + next);
// }

// const sumWithDiffPar = SumallWitDiff("test", 1, 2);
// console.log(sumWithDiffPar);

// // Array Spred operator

// const itEmpNames = ["emp1", "emp2"];

// const nonitEmpNames = ["emp3", "emp4"];

// const allEmpName = [...itEmpNames, ...nonitEmpNames];
// console.log(allEmpName);

// const allEmpNameReverse = [...nonitEmpNames, ...itEmpNames];
// console.log(allEmpNameReverse);

// // Object Spread Example

// const mobileStore = {
//   name: "MyMobile",
// };

// const brands = ["iPhone", "Redmi"];

// const finalMobileStore = {
//   ...mobileStore,
//   brands,
// };

// console.log(finalMobileStore);

// const mobileStoreWithObjectAssign = Object.assign({}, mobileStore, { brands });
// console.log(finalMobileStore, mobileStoreWithObjectAssign);

// //  Destructuring Arrays and Objects examples

// // const pizzaForObject = {
// //   name: "Pepperoni",
// //   toppings: ["pepperoni"],
// // };

// // function OrderPizza({ name, toppings }) {
// //   console.log(name, toppings);
// // }

// // function OrderPizzaWithRenameProps({
// //   name: pizzaName,
// //   toppings: pizzatoppings,
// // }) {
// //   console.log(pizzaName, pizzatoppings);
// // }

// // OrderPizza(pizzaForObject);
// // OrderPizzaWithRenameProps(pizzaForObject);

// // function OrderPizzaAsObject({ name: pizzaName, toppings: pizzatoppings }) {
// //   return {
// //     pizzaName,
// //     pizzatoppings,
// //   };
// // }
// // const { pizzaName } = OrderPizzaAsObject(pizzaForObject);
// // console.log(pizzaName);

// // // Array Destructuring

// // const brandNames = ["Iphone", "HTC", "Redmi"];
// // const [fisrt, second, third] = brandNames;
// // console.log(brandNames);

// // function logBrands([fisrt, second, third]) {
// //   console.log(fisrt, second, third);
// // }
// // logBrands([fisrt, second, third]);

// // Number types
// let pizzaCost: number = 25;
// const pizzaTopCost: number = 10;

// function calculatePrize(cost: number, TopCost: number): number {
//   return cost + 1.5 * TopCost;
// }

// const cost = calculatePrize(pizzaCost, pizzaTopCost);
// const costAsnum: number = calculatePrize(pizzaCost, pizzaTopCost);

// console.log(cost, costAsnum);

// console.log(`Cost: ${costAsnum}`);

// // String types
// const test: string = "pizza25";

// function normalize(code: string): string {
//   return code.toUpperCase();
// }

// console.log(normalize(test));

// const finaleMessage: string = `Final coupen code: ${normalize(test)}`;
// console.log(finaleMessage);

// // Boolean examles

// const orders: number = 2;
// function offerDisc(orders: number): boolean {
//   return orders >= 3;
// }

// if (offerDisc(orders)) {
//   console.log(`You have discount`);
// } else {
//   console.log(`add more than 3 orders to have discount`);
// }

// // ANy type example
// let coupen; // by default type is any

// coupen = 5;
// console.log(coupen);

// coupen = "Test";
// console.log(coupen);

// coupen = true;
// console.log(coupen);

// // Implicit vs Explicit Types
// // Ts uses inferred types internally by default as any
// let imlicictTest = "test";
// let explicittTest: string = "test";

// // Void type
// let selectedTop: string = "test";
// function voidexample(topping: string): void {
//   selectedTop = topping;
// }

// voidexample("newTest");
// console.log(selectedTop);
// //Pure function vs inpure function
// // pure just retuns results and impure mutate values

// // never example
// function onError(err: string): never {
//   throw new Error(err);
// }

// onError("Error Occureed");

// //Null, Undefined, Strict Null checks  : To make nullable var
// let Cop: string | null = "TestCop";

// function removeCop(): void {
//   Cop = null;
// }

// console.log(Cop);
// removeCop();

// console.log(Cop);

// // Union Types : we can use multiple types for a var using pipe | operator
// let pizzaSizeAsString: string = "small";

// function setpizzaSizeAsString(size: "small" | "medium" | "large"): void {
//   pizzaSizeAsString = size;
// }

// setpizzaSizeAsString("large");
// console.log(pizzaSizeAsString);

// let pizzaSizeAsNum: number = 1;

// function setpizzaSizeAsNum(size: 1 | 2 | 3): void {
//   pizzaSizeAsNum = size;
// }

// setpizzaSizeAsNum(3);
// console.log(pizzaSizeAsNum);

// // Function Types
// let Sumorder: (price: number, quanitity: number) => number;

// Sumorder = (x, y) => x * y;
// const sumO = Sumorder(10, 2);
// console.log(`Total Sum: ${sumO}`);

// // Function declaration and defination on one line
// let SumorderAsOnline: (price: number, quanitity: number) => number = (x, y) =>
//   x * y;

// const sumwithOneLineFunction = SumorderAsOnline(1, 2);
// console.log(`Total Sum: ${sumwithOneLineFunction}`);

// //Functions and Optional Arguments : add ? in parameter def
// let SumorderwithOptional: (price: number, quanitity?: number) => number;

// SumorderwithOptional = (x, y) => {
//   if (y) {
//     return x * y;
//   }
//   return x;
// };

// const sumorderwithOptional = SumorderwithOptional(1, 2);
// const sumorderwith1parl = SumorderwithOptional(1);
// console.log(
//   `Total Sum: ${sumorderwithOptional}, with Optional: ${sumorderwith1parl}`
// );

// //Typed Functions and Default Params
// let SumorderwithDefault: (price: number, quanitity?: number) => number;

// SumorderwithDefault = (x, y = 10) => {
//   return x * y;
// };
// const sumorderwithDefault = SumorderwithDefault(1);
// const sumorderwithoutDef = SumorderwithDefault(15, 2);
// console.log(`Total Sum by 1 para: ${sumorderwithDefault}`);
// console.log(`Total Sum all para: ${sumorderwithoutDef}`);

// //Object Types
// let pizzaObj: { name: string; price: number; getName(): string };
// pizzaObj = {
//   name: "test",
//   price: 20,
//   getName() {
//     return pizzaObj.name;
//   },
// };

// console.log(pizzaObj.getName());

// //Object Types as Onject on single
// let pizzaOneObj: { name: string; price: number; getName(): string } = {
//   name: "pizzaOneObj",
//   price: 20,
//   getName() {
//     return pizzaOneObj.name;
//   },
// };

// console.log(pizzaOneObj.getName());

// //Array Types and Generics
// let numArr: number[];
// numArr = [1, 2, 3];

// //Array as generic
// let strArr: Array<string>;
// strArr = ["One", "two"];

// //Tuple Types for Arrays
// let tuppleExp: [string, number, boolean?];
// tuppleExp = ["One", 20];
// tuppleExp = ["One", 20, true];

// //Type Aliases
// type Size = "small" | "medium";
// type Callback = (size: Size) => void;

// let PSize: Size = "medium";
// const selectize: Callback = (x) => {
//   PSize = x;
// };

// selectize("small");

// // Type Assertions
// type pizzaType = { name: string; price: number };
// const PizzaTypeExm = { name: "test", price: 20 };

// // Serizalize as Json
// const seriazlizeasJson = JSON.stringify(PizzaTypeExm);

// function getNameFromJson(obj: string) {
//   return (JSON.parse(obj) as pizzaType).name;
// }

// console.log(getNameFromJson(seriazlizeasJson));

// // Creating Interfaces
// interface pizzaInterface {
//   name: string;
//   sizes: string[];
// }

// let interfaceExp: pizzaInterface;

// interfaceExp = {
//   name: "test",
//   sizes: ["small", "large"],
// };

// function CreatePizza(name: string, sizes: string[]): pizzaInterface {
//   return {
//     name,
//     sizes,
//   };
// }

// interfaceExp = CreatePizza("testnew", ["small"]);
// console.log(interfaceExp);

// // Creating Interfaces with functions
// interface pizzaInterfaceWithFunc {
//   name: string;
//   sizes: string[];
//   getSizes(): string[];
// }

// let interfaceExpwithFun: pizzaInterfaceWithFunc;

// function CreatePizzaWithFun(name: string, sizes: string[]) {
//   return {
//     name,
//     sizes,
//     getSizes() {
//       return this.sizes;
//     },
//   } as pizzaInterfaceWithFunc;
// }

// interfaceExpwithFun = CreatePizzaWithFun("testnew", ["small"]);
// console.log(interfaceExpwithFun);

// //Extending Interfaces
// interface baseInterface {
//   sizes: string[];
// }

// interface childInterface extends baseInterface {
//   name: string;
//   getSizes(): string[];
// }

// let ExtendingInterfaceExp: childInterface;

// function CreatePizzaExtendingInterfaceExp(name: string, sizes: string[]) {
//   return {
//     name,
//     sizes,
//     getSizes() {
//       return this.sizes;
//     },
//   } as childInterface;
// }

// ExtendingInterfaceExp = CreatePizzaExtendingInterfaceExp("testnew", ["small"]);
// console.log(ExtendingInterfaceExp);

// //Interfaces and Optional Properties : toppings? declared as optional
// interface OptionalPropInterface {
//   name: string;
//   getSizes(): string[];
//   sizes: string[];
//   toppings?: number[];
// }

// let OptionalPropInterfaceExp: OptionalPropInterface;

// function CreatePizzaOptionalPropInterfaceExp(
//   name: string,
//   sizes: string[]
// ): OptionalPropInterface {
//   return {
//     name,
//     sizes,
//     getSizes() {
//       return this.sizes;
//     },
//   };
// }

// OptionalPropInterfaceExp = CreatePizzaExtendingInterfaceExp("testnew", [
//   "small",
// ]);
// console.log(OptionalPropInterfaceExp);
// OptionalPropInterfaceExp.toppings = [1, 2];
// console.log(OptionalPropInterfaceExp);

// //Interfaces with IndexSignatures
// interface IndexSignaturesInterface {
//   name: string;
//   getSizes(): string[];
//   sizes: string[];
//   toppings?: number[];
//   [key: string]: any;
// }

// let IndexSignaturesInterfaceExp: IndexSignaturesInterface;

// function CreatePizzaIndexSignaturesInterface(
//   name: string,
//   sizes: string[]
// ): IndexSignaturesInterface {
//   return {
//     name,
//     sizes,
//     getSizes() {
//       return this.sizes;
//     },
//   };
// }

// IndexSignaturesInterfaceExp = CreatePizzaIndexSignaturesInterface("testnew", [
//   "small",
// ]);

// IndexSignaturesInterfaceExp[1] = "xyz";
// console.log(IndexSignaturesInterfaceExp);

// // Classes and Constructors

// class PizzaClass {
//   name: string;
//   toppings: string[] = [];

//   constructor(name: string) {
//     this.name = name;
//   }

//   addToppings(topping: string) {
//     this.toppings.push(topping);
//   }
// }

// let pizzaObjExp: PizzaClass = new PizzaClass("Pepponary");
// pizzaObjExp.addToppings("tomato");

// console.log(pizzaObjExp);

// // Public and Private Members : by default are public

// class PizzaClassWithAccess {
//   public toppings: string[] = [];

//   constructor(private name: string) {}

//   //by default any var or func are public
//   addToppings(topping: string) {
//     this.toppings.push(topping);
//   }
// }

// let PizzaClassWithAccessExp = new PizzaClassWithAccess("Pepponary");
// pizzaObjExp.addToppings("tomato");

// console.log(PizzaClassWithAccessExp);

// //Readonly Members: only intialize while declaring
// class PizzaClassWReadonly {
//   public toppings: string[] = [];

//   constructor(readonly name: string) {}
// }

// let PizzaClassWReadonlysExp = new PizzaClassWReadonly("Pepponary");

// console.log(pizzaObjExp.name);

// //Setters and Getters (Accessors) : they are always public
// class Sizes {
//   constructor(public sizes: string[]) {}

//   get AvaialbleSizes() {
//     return this.sizes;
//   }

//   set AvaialbleSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }

// const sizees = new Sizes(["small", "medium"]);

// //Getter
// console.log(sizees.AvaialbleSizes);

// //setter
// sizees.AvaialbleSizes = ["large", "medium"];
// console.log(sizees.AvaialbleSizes);

// // Classes inheritance

// class SizesBaseClass {
//   constructor(public sizes: string[]) {}

//   get AvaialbleSizes() {
//     return this.sizes;
//   }

//   set AvaialbleSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }

// class PizzaChildClass extends SizesBaseClass {
//   toppings: string[] = [];

//   constructor(readonly name: string, public sizes: string[]) {
//     super(sizes);
//   }

//   addToppings(topping: string) {
//     this.toppings.push(topping);
//   }
// }

// let inheritanceObjExp: PizzaChildClass = new PizzaChildClass("Pepponary", [
//   "small",
//   "large",
// ]);
// inheritanceObjExp.addToppings("tomato");

// console.log(inheritanceObjExp);
// console.log(inheritanceObjExp.AvaialbleSizes);

// // Abstract Classes
// abstract class abstactClass {
//   constructor(public sizes: string[]) {}

//   get AvaialbleSizes() {
//     return this.sizes;
//   }

//   set AvaialbleSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }

// class PizzaChildabstactClassClass extends abstactClass {
//   toppings: string[] = [];

//   constructor(readonly name: string, public sizes: string[]) {
//     super(sizes);
//   }

//   addToppings(topping: string) {
//     this.toppings.push(topping);
//   }
// }

// let abstactClassExp: PizzaChildabstactClassClass =
//   new PizzaChildabstactClassClass("Pepponary", ["small", "large"]);
// abstactClassExp.addToppings("tomato");

// console.log(abstactClassExp);
// console.log(abstactClassExp.AvaialbleSizes);

// // Protected Members and Inheritance
// abstract class ProtectedClass {
//   constructor(protected sizes: string[]) {}

//   get AvaialbleSizes() {
//     return this.sizes;
//   }

//   set AvaialbleSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }

// class PizzaChildProtectedClass extends ProtectedClass {
//   toppings: string[] = [];

//   constructor(readonly name: string, sizes: string[]) {
//     super(sizes);
//   }

//   addToppings(topping: string) {
//     this.toppings.push(topping);
//   }

//   updateSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }

// let ProtectedClassExp: PizzaChildProtectedClass = new PizzaChildProtectedClass(
//   "Pepponary",
//   ["small", "large"]
// );
// ProtectedClassExp.addToppings("tomato");
// ProtectedClassExp.updateSizes(["medium"]);

// console.log(ProtectedClassExp);
// console.log(ProtectedClassExp.AvaialbleSizes);

// //Interface contracts with “implements”
// interface SizeInter {
//   AvaialbleSizes: string[];
// }

// abstract class SizesClass implements SizeInter {
//   constructor(protected sizes: string[]) {}

//   get AvaialbleSizes() {
//     return this.sizes;
//   }

//   set AvaialbleSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }

// interface PizzaInterface extends SizeInter {
//   name: string;
//   toppings: string[];
//   addToppings(topping: string): void;
//   updateSizes(sizes: string[]): void;
// }

// class PizzaCClass extends SizesClass implements PizzaInterface {
//   toppings: string[] = [];

//   constructor(readonly name: string, public sizes: string[]) {
//     super(sizes);
//   }

//   addToppings(topping: string) {
//     this.toppings.push(topping);
//   }

//   updateSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }

// let pizzaCClassExm: PizzaCClass = new PizzaCClass("Pepponary", [
//   "small",
//   "large",
// ]);
// pizzaCClassExm.addToppings("tomato");

// console.log(pizzaCClassExm);
// console.log(pizzaCClassExm.AvaialbleSizes);

// //Static Properties and Methods
// class Coupens {
//   static allowed = ["One", "two"];

//   static createCopuen(perce: number) {
//     return `PIZZA_${perce}`;
//   }
// }

// console.log(Coupens.allowed);
// console.log(Coupens.createCopuen(10));

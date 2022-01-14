// This keyword Scopes
// Global this
function GlobalFunctionThisScope() {
  console.log("GlobalFunctionThisScope::", this);
}

GlobalFunctionThisScope();

// Const method this
const ConstFunctionThisScope = {
  myMethod() {
    console.log("ConstFunctionThisScope::", this);
  },
};

ConstFunctionThisScope.myMethod();

// class method this
class ClassForThisScope {
  myMethod() {
    console.log("ClassForThisScope::", this);
  }
}

const classForThisScopeObj = new ClassForThisScope();
classForThisScopeObj.myMethod();

//Exploring “this” with .call, .apply and .bind
// Object Litteral
const MyObj = {
  myMethod() {
    console.log("Object::", this);
  },
};

//MyObj.myMethod();
//Call need to pass params as comma separated, Apply need to pass parameters as Array
// Function
function MyFunction(arg1: string, arg2: string) {
  console.log("Funcion::", this, arg1, arg2);
}

MyFunction("arg1", "arg2");
MyFunction.call(MyObj, "arg1", "arg2");
MyFunction.apply(MyObj, ["arg1", "arg2"]);

// TypescriptFunction with rest parameters
function MyFunctionWithRestPar(...text: string[]) {
  console.log("Funcion::", this, text);
}

MyFunctionWithRestPar("arg1", "arg2");
MyFunctionWithRestPar.call(MyObj, "arg1", "arg2");
MyFunctionWithRestPar.apply(MyObj, ["arg1", "arg2"]);

const bindFunction = MyFunctionWithRestPar.bind(MyObj);
bindFunction("arg1", "arg2");
bindFunction("1", "3");
bindFunction("arg1", "arg2");

// Arrow Functions and Lexical Scope
class ArrayFunctionClass {
  myMethod() {
    const test = 123;
    // Sets this scope as scope of class
    console.log("1", this);

    setTimeout(function () {
      // Lexical scope - test is available becuase lexical scope in this new scope
      console.log(test);
      console.log("2", this);
    }, 0);

    setTimeout(() => {
      // with array function, it not binds the this to method so scope of this will not be changed. It does inherit this value
      console.log("3", this);
    }, 0);
  }
}

const instance = new ArrayFunctionClass();
instance.myMethod();

// Typing “this” and “noImplicitThis”
// Pass this type with first parameter
const elem: Element | null = document.querySelector<Element>(".click");

function handleClick(this: HTMLAnchorElement, eventName: Event) {
  eventName.preventDefault();
  console.log(this.className);
}

elem?.addEventListener("click", handleClick, false);

//“typeof” Type Queries
typeof "";
console.log(typeof "");

const person = {
  name: "Todd",
  age: 25,
};

type Person = typeof person;

const PersonExm: Person = {
  name: "John",
  age: 30,
};
console.log(PersonExm);

// inline type of
const PersonInlineTypeOfExm: typeof person = {
  name: "John",
  age: 30,
};
console.log(PersonInlineTypeOfExm);

//“keyof” Index Type Queries
const keyofperson = {
  name: "Todd",
  age: 25,
};
type keyofPerson = typeof keyofperson;

// Key of will return the keys with union type like type PersonKeys = "name" | "age"
type PersonKeys = keyof keyofPerson;

// will return new unitype with actual data types not string eg. type PersonTypes = string | number

type PersonTypes = keyofPerson[PersonKeys];

//“keyof”, Generics and Lookup Types
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const personame = getProperty(person, "name");
console.log(personame);

//“Readonly” Mapped Type

interface readonlyExpInterface {
  name: string;
  age: number;
}

const readonlyMappingClass: readonlyExpInterface = {
  name: "test",
  age: 25,
};

function freeze(person: readonlyExpInterface) {
  // Freeze will make all props as Readonly
  return Object.freeze(person);
}
const newObj = freeze(readonlyMappingClass);
console.log(newObj);

function freezeasGenerics<T>(obj: T): Readonly<T> {
  // Freeze will make all props as Readonly
  return Object.freeze(obj);
}

const newObj1 = freezeasGenerics(readonlyMappingClass);
console.log(newObj1);

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

function freezeasWithCustomReadonly<T>(obj: T): MyReadonly<T> {
  // Freeze will make all props as Readonly
  return Object.freeze(obj);
}
const newObj3 = freezeasWithCustomReadonly(readonlyMappingClass);
console.log(newObj3);

// “Partial” Mapped Type
interface partialExpInterface {
  name: string;
  age: number;
}

function updatePersonClass(person: partialExpInterface, prop: any) {
  return { ...person, ...prop };
}

const em: partialExpInterface = {
  name: "todd",
  age: 30,
};
console.log(em);
const updated = updatePersonClass(em, { name: "John" });
console.log(updated);

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

function updatePersonClassWithPartial(
  person: partialExpInterface,
  prop: MyPartial<partialExpInterface>
) {
  return { ...person, ...prop };
}
const updatedwith = updatePersonClassWithPartial(em, { name: "Leo" });
console.log(updatedwith);

// “Required” Mapped Type, +/- Modifiers
interface RequiredExpInterface {
  name: string;
  age?: number;
}

// type MyRequired<T> = {
//   [P in keyof T]-?: T[P];
// };

// function printAge(obj: Required<RequiredExpInterface>) {
//   return `${obj.name} is ${obj.age}`;
// }
// const reqEx: Required<RequiredExpInterface> = {
//   name: "todd",
//   age: 27,
// };

// console.log(printAge(reqEx));

// “Pick” Mapped Type : Can give few props from object
interface PickExpInterface {
  name: string;
  age: number;
  address: {};
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

const pickex: Pick<PickExpInterface, "name" | "age"> = {
  name: "todd",
  age: 30,
};

console.log(pickex);

//“Record” Mapped Type
// with dictionary
let dictionary: { [key: string]: any } = {};

interface TrackStatus {
  current: string;
  next: string;
}

const songTrack: TrackStatus = {
  current: "test",
  next: "7686",
};

dictionary[0] = songTrack;
//console.log(dictionary[0]);

// With Record
let recorddictionary: Record<string, TrackStatus> = {};

const item: Record<keyof TrackStatus, string> = {
  current: "test",
  next: "7686",
};

recorddictionary[0] = item;
console.log(recorddictionary[0]);
// with typeof
let typeofrecorddictionary: Record<string, typeof item> = {};
typeofrecorddictionary[0] = item;
console.log(typeofrecorddictionary[0]);

/* “typeof” and Type Guards  - If one type identified TS automatically idetify second type from pipe*/
function typeOFEX(bar: string | number) {
  if (typeof bar === "string") {
    console.log(bar.toUpperCase());
    return bar.toUpperCase();
  }
  console.log(bar.toFixed(2));
  return bar.toFixed(2);
}
typeOFEX("test");
typeOFEX(125.255);

//
class Song {
  constructor(public title: string, public duration: string | number) {}
}

function getSongDur(item: Song) {
  if (typeof item.duration === "string") {
    return item.duration;
  }
  const { duration } = item;
  const min = Math.floor(duration / 60000);
  const sec = (duration / 1000) % 60;
  return `${min}:${sec}`;
}

const songDurFromString = getSongDur(new Song("test", "05:51"));
console.log(songDurFromString);

const songDurFromMS = getSongDur(new Song("test", 90000));
console.log(songDurFromMS);

/*  3 ways for function*/
class oneway {
  bar() {}
}

function twoway() {}

twoway.prototype.bar = function () {};

/* “instanceof” and Type Guards */
class Foo {
  bar() {}
}

const bar = new Foo();

console.log(Object.getPrototypeOf(bar) === Foo.prototype);
console.log(bar instanceof Foo);

class SongNew {
  kind = "song";
  constructor(public title: string, public duration: number) {}
}

class PlayLIst {
  kind = "playlist";
  constructor(public name: string, public songs: SongNew[]) {}
}

function getItemName(item: SongNew | PlayLIst) {
  if ((item as SongNew).title) {
    return (item as SongNew).title;
  }
  return (item as PlayLIst).name;
}

const songNme = getItemName(new SongNew("mysong", 30000));
console.log("SongName", songNme);

const playlistName = getItemName(
  new PlayLIst("playlist1", [new SongNew("mysong2", 30000)])
);
console.log("PlaylistName", playlistName);

/* Use Instaceof */
function getItemNameUsingInstance(item: SongNew | PlayLIst) {
  if (item instanceof SongNew) {
    return item.title;
  }
  return item.name;
}

console.log(
  "SongName",
  getItemNameUsingInstance(new SongNew("mysong2", 30000))
);

console.log(
  "PlaylistName",
  getItemNameUsingInstance(
    new PlayLIst("playlist2", [new SongNew("mysong3", 30000)])
  )
);

/* User Defined Type Guards  */
// we can use only for return boolean not other types
function isSong(item: any): item is SongNew {
  return item instanceof SongNew;
}

function getItemNameUsinguserdefinedTypeGuard(item: SongNew | PlayLIst) {
  if (isSong(item)) {
    return item.title;
  }
  return item.name;
}

/* Literal Type Guards and “in” Operator */
const exists = "localStorage" in window;
console.log(exists);

const Inexp: string = "bar";

function isSongWithIn(item: any): item is SongNew {
  return "title" in item;
}

function getItemNameUsingKindStringLiteral(item: SongNew | PlayLIst): string {
  if (item.kind === "song") {
    return (item as SongNew).title;
  }
  return (item as PlayLIst).name;
}

/* Intersection Types */
interface MyOrder {
  id: string;
  currency: string;
  amount: number;
}

interface Stripe {
  type: "stripe";
  card: string;
  cvc: string;
}

interface Paypal {
  type: "paypal";
  email: string;
}

type CheckOutWithCard = MyOrder & Stripe;
type CheckOutWithPayPal = MyOrder & Paypal;

const myorder: MyOrder = {
  id: "ygdd",
  amount: 10,
  currency: "usd",
};

const withCard: CheckOutWithCard = {
  ...myorder,
  type: "stripe",
  card: "1111 5555 5555 6666",
  cvc: "123",
};

const withPaypal: CheckOutWithPayPal = {
  type: "paypal",
  ...myorder,
  email: "123@.com",
};

console.log(withCard);
console.log(withPaypal);

// another way to merge object is Use Object Assign - It internally used &
const assigned = Object.assign({}, myorder, withCard);
console.log(assigned);

/* Discriminated (Tagged) Unions */

type Payload = CheckOutWithCard | CheckOutWithPayPal;
function checkout(payload: Payload) {
  if (payload.type === "stripe") {
    console.log(payload.card, payload.cvc);
  }
  if (payload.type === "paypal") {
    console.log(payload.email);
  }
}

checkout(withCard);
checkout(withPaypal);

/* Interfaces vs Type Aliases */
// We can not extend types

interface Songitem {
  name: string;
}

interface Artist extends Songitem {
  songs: number;
}

interface Artist {
  getSongs(): number;
}

/* We can declare multiple interfaces with same name but we need to provide all props while using it i.e. we need to merge decoratos
// we can not have types with same name */

type Artist2 = { name: string } & Songitem;

const newArtist: Artist = {
  name: "abc",
  songs: 5,
  getSongs() {
    return this.songs;
  },
};

/* Interfaces vs Classes */
/* Just check type checking - Use interface
to provide implementation : Use classes 
Interface: we can not cretae instance for class we can */

interface IArt {
  name: string;
}

function artFactory({ name }: IArt) {
  return new ArtCreator(name);
}

class ArtCreator implements IArt {
  constructor(public name: string) {}
}

console.log(artFactory({ name: "todd" }));

/* Function Generics */
class List {
  private list: any[] = [];

  addItem(item: any): void {
    this.list.push(item);
  }

  getList(): any[] {
    return this.list;
  }
}

const list = new List();
list.addItem("test");
console.log(list.getList());

class mobile {
  constructor(private name: string, private price: number) {}
}
list.addItem(new mobile("Redmi", 20000));
console.log(list.getList());

// Generics Example

class GenericListClass<T> {
  private list: T[] = [];

  addItem(item: T): void {
    this.list.push(item);
  }

  getList(): T[] {
    return this.list;
  }
}
const genericList = new GenericListClass<mobile>();
genericList.addItem(new mobile("Redmi", 20000));
console.log(genericList.getList());

/* Function Overloads  */

//Below 2 are just for doc
function reverse(str: string): string;
function reverse<T>(arr: T[]): T[];

//Below is actual implementation, In Js there will not be 2 function names with same name
function reverse<T>(stringOrArray: string | T[]): string | T[] {
  if (typeof stringOrArray === "string") {
    return stringOrArray.split("").reverse().join("");
  }
  return stringOrArray.slice().reverse();
}

console.log(reverse("Test"));
console.log(reverse(["11", "2"]));

/* Numeric Enums and Reverse Mappings */
enum Sizes {
  small,
  medium,
  large,
}

enum Sizes {
  extraLarge = 3,
}

console.log(Sizes.medium);
console.log(Sizes[0]);
console.log(Sizes[Sizes.large], Sizes[Sizes.extraLarge]);

/*  String Enums and Inlining Members  */
enum SizesString {
  Small = "small",
  Medium = "medium",
  Large = "large",
}
//console.log(SizesString[SizesString.Small]);

let selected: SizesString = SizesString.Small;
function updateSize(size: SizesString): void {
  selected = size;
}
console.log(selected);
updateSize(SizesString.Large);
console.log(selected);

/*  Add Const before enum to avoid the js code generation but skip when we want to use enum multiple places */
const enum ConstSizes {
  small,
  medium,
  large,
}

/* DefinitelyTyped and @types */
/* DefinitelyTyped is a must have resource for any TypeScript developer. It’s essentially documentation (well, *.d.ts files) for most JavaScript packages available out there in the open source community.

This means when you next install a third-party package, you’ll also want to install the type declaration files as well. Doing so will open up typed-everything (autocompletion, spell checks, IDE support and so on). From jQuery and lodash through to front-end frameworks, you can be sure have the full power of TypeScript behind them.

It’s also a community-driven project, should ever need to send a PR (Pull Request) to add any new typings! */

/* To skip any files like test files . Files takes precedence then exclude then include */

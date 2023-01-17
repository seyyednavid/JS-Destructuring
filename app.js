// Destructuring Assignment

let a, b;
[a, b] = [100, 200];

console.log(a); //100
console.log(b); //200

console.log("-----------");
// --------------------------------

// Rest Pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

console.log(a); //100
console.log(b); //200
console.log(rest); //[300, 400, 500]

console.log("------------");
// ---------------------------------

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(a); // 100
console.log(b); // 200

({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(rest); //{c: 300, d: 400, e: 500}

console.log("------------");
// ---------------------------------

// Array destructuring
const people = ["John", "Beth", "Mike"];
const [person1, person2, person3] = people;

console.log(person1, person2, person3); //John Beth Mike

// Parse array returned from function
function getPeople() {
  return ["Arash", "Maz", "Ali"];
}
// let person4, person5, person6 ;
[person4, person5, person6] = getPeople(); 
console.log(person4, person5, person6); // Arash Maz Ali

console.log("------------");
// ---------------------------------

// Object Destructuring
const client = {
  name_c: "Mahyar Lali",
  age_c: 34,
  city_c: "Miami",
  gender_c: "male",
  sayHello: function () {
    console.log("hello");
  },
};
// Old ESS
// const name = client.name_c,
//       age = client.age_c,
//       city = client.city_c,
//       gender = client.gender_c

// New ES6
const { name_c, age_c, city_c, sayHello } = client;
console.log(name_c); //Mahyar Lali
console.log(age_c); // 34
console.log(city_c); // Miami
sayHello(); //hello

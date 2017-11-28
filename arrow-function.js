// var square = (x) => {
//   let result = x * x;
//   return result;
// };
// is the same as...

var square = x => x * x;
console.log(square(7));

var user = {
  name: 'Ryan',
  sayHi: () => {
    console.log(`Hi. I'm ${this.name}`); // undefined
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`); // prints name string
  }
}

user.sayHi();
user.sayHiAlt('these', 'are', 'arguments');
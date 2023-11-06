// class AgedPerson {
//   prinAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = 'Max';

//   constructor() {
//     super();
//     this.age = 30;
//   }

//   greet() {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   }
// }

// function Person() {
//   this.age = 30;
//   this.name = 'Dmytro';
//   this.greet = function () {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   };
// }

// Person.prototype.prinAge = function () {
//   console.log(this.age);
// };

// console.dir(Person);
// const p = new Person();
// p.greet();
// p.prinAge();
// console.log(p.__proto__);
// console.log(p.toString());

const course = {
  title: 'course 1',
  rating: 4,
};

Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

course.printRating();

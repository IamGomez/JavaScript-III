/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.

* Context needed to understand what 'this' is reffering to.

* 1. When 'this' keyword is used in a global-scope existing function, it refferes to 'window/console Obejct.
* 2. When an object invokes a fucntion, the object is 'this'.
* 3. When 'this' keyword is used inside a constructor-function, 'this' refers to the object being created.
* 4. When the methods call and apply are used, this refers to the argument used by methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding


const theFunction = function () {

  console.log(this);

};

theFunction();


// Principle 2

// code example for Implicit Binding

const myUser = {

  name: 'Nikola',
  age: 33,
  talk: function () {

    console.log("hello, my name is" + this.name)

  }
}

myUser.talk('Luis');

// Principle 3

// code example for New Binding

function sayHello(name) {

    this.name = name,
    this.lastName = lastName,
    this.speak = function () {

      console.log("Hi!, name is" + this.name + this.lastName);

    }
};

let newUser = new sayHello('Leo');
let newUSer01 = new sayHello('Tesla');

// Principle 4

// code example for Explicit Binding

const userFile = {

  name= 'Luis',
  lastName= 'Gomez',
  age= 33,
};

function sayHello(user) {

  console.log("Hi!, name is" + this.name)

}

sayHello.call(user)


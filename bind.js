const studentOne = {
  name: "Navaneeth V",
  age: 21,
};

const studentTwo = {
  name: "Nandu Vinod",
  age: 26,
  x : () => {
    console.log(this);
  }
};

studentTwo.x()

function greeting(wish) {
  console.log(wish + ", ", this.name + " " + this.age);
}

const fn = greeting.bind(studentOne, "Happy Birthday");

// fn();

// This is also another powerful way to control "this" context in functions.
// But unline call() and apply() it doesn't immediately invoke the function
// Instead it creates a new Function that when called has its "this" keyword set the provided value

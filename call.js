const obj = {
  name: "Navaneeth V",
  age: 21,
  details: function (place) {
    console.log(this.name + " " + this.age + " and from " + place);
  },
};

const obj2 = {
  name: "Pegpilot",
  age: 17,
};

obj.details.call(obj2, "Alappuzha");

// Call method in Js is basically used for borrowing methods from one object to another and explicitly setting the this context
// It enables more flexible and reusable code by allowing functions to be shared between objects

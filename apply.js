const user1 = {
  name: "Navaneeth V",
  greeting: function (question) {
    console.log("Happy Birthday " + this.name + ", " + question);
  },
};

const user2 = {
  name: "Nandana",
};

user1.greeting.apply(user2, ["How are you !"]);

// When it comes to apply it is also used for borrowing functions but with a slight difference in how arguments are passed to the function.
// Instead of passing arguments individually to the function we are pasing them as an array
// This also set the "this" context explicitly

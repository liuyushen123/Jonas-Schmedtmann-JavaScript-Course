"use strict";

const runOnce = function () {
  console.log("This will never run again");
};

runOnce();

// Immediately Invoked Function Expressions
(function () {
  console.log("This will never run again");
});

(() => console.log("This will ALSO never run again"))();

"use strict";

function simplify(input) {
  let inputMass = input.split("");

  if (input.length > 10) {
    console.log(inputMass[0], input.length - 2, inputMass[input.length - 1]);
  } else {
    console.log(input);
  }
}
simplify("localization");

"use trict";

// Cпочатку просто записав метод

function caps(input) {
  let inputMass = input.split(" ");

  if (inputMass.length === 1) {
    if (input === input.toUpperCase()) {
      console.log(input.toLowerCase());
    } else if (input != input.toUpperCase() && input != input.toLowerCase()) {
      let inputPerLetter = input.split("");
      let firstLetterCheck = inputPerLetter[0];
      let wordEndCheck = input.slice(1);
      const answerMass = [
        firstLetterCheck.toUpperCase(),
        wordEndCheck.toLowerCase(),
      ];
      const answer = answerMass.join("");
      if (
        firstLetterCheck === firstLetterCheck.toLowerCase() &&
        wordEndCheck === wordEndCheck.toUpperCase()
      )
        console.log(answer);
      else console.log(input);
    } else {
      console.log(input);
    }
  } else console.log("many words");
}

// Вирішення задачі

let initialInput = "wHY DO wE NEED cAPS lOCK?";
let initialInputBigMass = initialInput.split(" ");
for (let i = 0; i <= initialInputBigMass.length; i++) {
  caps(initialInputBigMass[i]);
}

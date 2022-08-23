function caps(input) {
    let inputMass = input.split(" ");
    
    console.log(inputMass);
    console.log(inputMass.length);
    console.log(input.slice(1));
    
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
       // console.log(firstLetterCheck.toLowerCase());
         if (
             firstLetterCheck === firstLetterCheck.toLowerCase() &&
             wordEndCheck === wordEndCheck.toUpperCase()
         )
             console.log(answer);
         else console.log(input);
           
         
     } else {
       console.log(input);
     }
   }
    else console.log("many words");

}
caps("lOCK");

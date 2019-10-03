// business logic
//
// var result = function(userInput){
//   // var splitInput = function(userInput) {
//   //   return userInput.split(" ");
//
// //   if(userInput.includes("a", "e", "i", "o","u")) {
// //     console.log("Contains a vowel");
// //     return true;
// //   } else {
// //     console.log("No vowel");
// //     return false;
// //   }
// };

// user interface logic
$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    var userInput = $("input#word").val();
    var splitInput = userInput.split(" ");
      splitInput.forEach(function(word) {
        console.log(word);
        var vowelArray = ["a", "e", "i", "o","u"];
        var vowelIndex = 0;
        word.split("").forEach(function(letter, index){
          if(vowelArray.includes(letter)) {
            console.log("First letter is a vowel");
            console.log("Letter:" +  letter);
          } else {
            console.log("Index:" + index);
          }
        });

        // var firstLetter = userInput.indexOf(vowelArray);
        // console.log(firstLetter);
        // console.log(vowelArray);
        // $(".pigLatinResult").text(userInput);
        // console.log(userInput);
      });
    //   console.log(splitInput);
    // var answer = splitInput(userInput);


    $("#result").show();
    // debugger;
    event.preventDefault();
  });
});

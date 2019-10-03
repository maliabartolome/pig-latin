// business logic

var result = function(userInput){
  // var splitInput = function(userInput) {
  //   return userInput.split(" ");

//   if(userInput.includes("a", "e", "i", "o","u")) {
//     console.log("Contains a vowel");
//     return true;
//   } else {
//     console.log("No vowel");
//     return false;
//   }
};

// user interface logic
$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    var userInput = $("input#word").val();
    // var splitInput = userInput.split(" ");
      // console.log(splitInput);
    // var answer = splitInput(userInput);
    //
    var vowelArray = ["a", "e", "i", "o","u"];
    var firstLetter = userInput.indexOf(vowelArray);
    console.log(firstLetter);
    console.log(vowelArray);
    $(".pigLatinResult").text(userInput);
    console.log(userInput);

    $("#result").show();
    event.preventDefault();
  });
});
// };

"use strict";

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const button = document.querySelector("button");
button.textContent = "Submit";

function processCamelCase(wordList) {
  const cleanedWords = [];

  const cleanedWordList = wordList.filter(Boolean);

  const first = cleanedWordList.shift();
  if (first) cleanedWords.push(first.trim().toLowerCase());

  for (const n of cleanedWordList) {
    const cleaning = n.trim().toLowerCase();

    cleanedWords.push(cleaning[0].toUpperCase() + cleaning.slice(1));
  }

  return cleanedWords.join("");
}

button.addEventListener("click", function () {
  const textList = document.querySelector("textarea").value.split("\n");
  for (let i = 0; i < textList.length; i++) {
    console.log(
      processCamelCase(textList[i].split("_")).padEnd(50) +
        `${"✅".repeat(i + 1)}`,
    );
  }
});

/*


underscore_case
first_name
some_variable
calculate_AGE
delayed_departure

FIRST_name
last_NAME
UsEr_Id

  first_name
last_name  
   user_id   

very_long_variable_name
this_is_a_test_case
one_more_example_here

username
email
password

first__name
last___name
__user__id__

user_1_name
version_2_update
test_123_case

alreadyCamelCase
thisIsFine
no_change_needed

   VERY_long__VARIABLE_name_123_test_CASE   


*/

const poll = {
  question: "What is your favvourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

  answers: new Array(4).fill(0),
};

console.log(poll.answers);

poll.registerNewAnswer = function () {
  const answer = Number(prompt(`${this.question}\n${this.options.join("\n")}`));

  if (typeof answer === "number" && answer < this.answers.length) {
    this.answers[answer]++;
  }

  this.displayResult();
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResult = function (type = "string") {
  if (type === "string") {
    console.log(`Poll results are ${this.answers.join(",")}`);
    return;
  }

  console.log(this.answers);
};

poll.displayResult.call({ answers: [5, 3, 2] });
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] });

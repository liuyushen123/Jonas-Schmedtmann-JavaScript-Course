const friends = ['Michael', "Steven", "Peter"];

//Push method will add the element to the end of the array
const newLength = friends.push("Jay");
console.log(newLength)

//Unshift will add the element to the beginning of the array
friends.unshift("John");
console.log(friends)

//Pop will remove the last element of the array
friends.pop();
console.log(friends);
// ======================================================
// How I Used to Handle Problems (and How to Fix It)
// ======================================================

// -----------------------------
// ❌ Common Mistakes
// -----------------------------

// Whenever I encounter a problem:
// 1) I jump into the problem without enough thinking
// 2) I implement a solution in an unstructured way
// 3) I get stressed out when things don’t work
// 4) I’m too proud to research existing solutions

// -----------------------------
// ✅ Better Problem-Solving Approach
// -----------------------------

// 1) Fully understand the problem
//    Make sure you 100% understand what is being asked.

// 2) Ask the right questions
//    Clarify requirements to get a clear picture of the problem.

// ------------------------------------------------------
// Example Problem
// ------------------------------------------------------

// Project Manager:
// "We need a function that reverses whatever we pass into it."

// Questions to ask:
// - What does “whatever” mean in this context?
// - What values actually make sense to reverse?
//   → Strings, numbers, and arrays
// - What should happen if something else is passed in?
// - What should be returned?
//   → Should the return type match the input type?

// ------------------------------------------------------
// Planning the Solution
// ------------------------------------------------------

// Key questions:
// - How do we recognize whether the argument is:
//   • a number?
//   • a string?
//   • an array?

// - How do we reverse:
//   • a number?
//   • a string?
//   • an array?

// ------------------------------------------------------
// Divide and Conquer
// ------------------------------------------------------

// Break one big problem into smaller sub-problems:

// 1) Check if the argument is a number, string, or array
// 2) Implement logic to reverse a number
// 3) Implement logic to reverse a string
// 4) Implement logic to reverse an array
// 5) Return the reversed value

// ------------------------------------------------------
// Research Is Not Cheating
// ------------------------------------------------------

// Don’t be afraid to research:

// - How to check if a value is a number in JavaScript
// - How to check if a value is a string in JavaScript
// - How to check if a value is an array in JavaScript
// - How to reverse a number in JavaScript
// - How to reverse a string in JavaScript
// - How to reverse an array in JavaScript

// ------------------------------------------------------
// Pseudocode Before Real Code
// ------------------------------------------------------

// For bigger problems, write pseudocode first:

// function reverse(value)
//   if value is NOT a string, number, or array
//       return value
//
//   if value is a string
//       reverse string
//
//   if value is a number
//       reverse number
//
//   if value is an array
//       reverse array
//
//   return reversed value

// ------------------------------------------------------
// ⭐ Key Takeaway
// ------------------------------------------------------

// Slow down.
// Understand the problem.
// Break it into

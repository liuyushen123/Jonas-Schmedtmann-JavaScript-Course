"use strict";

/**
 * --- JAVASCRIPT SORTING CHEAT SHEET ---
 * * CORE RULES:
 * 1. .sort() MUTATES the original array (it doesn't make a copy).
 * 2. By default, it sorts everything as STRINGS (even numbers).
 * 3. A Compare Function is REQUIRED for numbers to work correctly.
 */

// --- 1. SORTING STRINGS ---
const owners = ["Jonas", "Zach", "Adam", "Martha"];
owners.sort();
// Result: ["Adam", "Jonas", "Martha", "Zach"] (Mutated)

// --- 2. SORTING NUMBERS (The "Trap") ---
const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

// Default behavior: Converts to strings first!
// "-1000" comes before "-30" because "1" < "3".
// movements.sort(); // ❌ DO NOT DO THIS FOR NUMBERS

// --- 3. THE COMPARE FUNCTION (Long Form) ---
// Return < 0 (Negative): A, B (keep order)
// Return > 0 (Positive): B, A (switch order)

// ASCENDING
movements.sort((a, b) => {
  if (a > b) return 1; // Switch
  if (a < b) return -1; // Keep
});

// DESCENDING
movements.sort((a, b) => {
  if (a > b) return -1; // Keep
  if (a < b) return 1; // Switch
});

// --- 4. THE MATHEMATICAL SHORTCUT (Pro Way) ---
// Since we only need to return a positive or negative number:

// ASCENDING (A -> B)
// If a=10, b=5: 10 - 5 = 5 (Positive) -> Switch!
movements.sort((a, b) => a - b);

// DESCENDING (B -> A)
// If a=5, b=10: 10 - 5 = 5 (Positive) -> Switch!
movements.sort((a, b) => b - a);

// --- 5. IMMUTABLE SORTING (Crucial for Bankist App) ---
// To avoid "ruining" the original order of transactions, copy first.

// Way A: Spread Operator
const sortedAsc = [...movements].sort((a, b) => a - b);

// Way B: slice()
const sortedDesc = movements.slice().sort((a, b) => b - a);

// Way C: Modern ES2023+ (Does not mutate)
// const sortedNew = movements.toSorted((a, b) => a - b);

/**
 * SUMMARY TABLE:
 * +----------------+-------------+-------------------------------+
 * | Goal           | Logic       | Result                        |
 * +----------------+-------------+-------------------------------+
 * | Alphabetical   | .sort()     | ["A", "B", "C"]               |
 * | Smallest First | (a, b) => a - b | [-100, 0, 100]            |
 * | Largest First  | (a, b) => b - a | [100, 0, -100]            |
 * +----------------+-------------+-------------------------------+
 */

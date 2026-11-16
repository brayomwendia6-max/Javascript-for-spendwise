# Spendwise - Budget Tracker

Spendwise is a budget dashboard that helps you track your monthly budget and expenses in one place.

You enter your budget and expenses, and it calculates how much you have spent, how much is remaining, and what percentage of your budget you have used.

Monthly budget example: **Ksh 45,000**

## JavaScript Concepts Implemented

- Variables (`let`)
- Data types (String, Number, Array, Object)
- User input with `prompt()`
- Calculations with operators
- Functions
- Loops (`for...of`)
- Conditionals (`if / else`)
- Console output with `console.log()`
- DOM updates with `querySelector`

## How Variables Are Used

- `userName` - stores the user's name as a String
- `monthlyBudget` - stores the budget as a Number
- `expenses` - stores all expenses as an Array of Objects
- `totalSpent`, `remaining`, `percentUsed` - store calculated results

Example:
```js
let monthlyBudget = 45000;
let expenses = [
  { name: "Rent", amount: 15000, category: "Rent", date: "2026-11-01" }
];

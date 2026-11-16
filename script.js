
const appName = "SpendWise";
let budget = 50000;
let expenseName = "Lunch";
let expenseAmount = 500;


budget = Number(prompt("Enter your budget:"));
expenseName = prompt("Enter expense name:");
expenseAmount = Number(prompt("Enter your expense:"));

function calculateBalance(budget, expense) {
  return budget - expense;
}

function calculateWeeklyBudget(monthlyBudget) {
  return monthlyBudget / 4;
}


let balance = calculateBalance(budget, expenseAmount);
let weeklyBudget = calculateWeeklyBudget(budget);

console.log("App Name:", appName);
console.log("Monthly Budget:", budget);
console.log("Expense Name:", expenseName);
console.log("Expense Amount:", expenseAmount);
console.log("Remaining Balance:", balance);
console.log("Weekly Budget:", weeklyBudget);

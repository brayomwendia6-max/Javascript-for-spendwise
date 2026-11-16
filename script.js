// ================= 1. SET UP + DATA =================
// Budget data - variables
let userName = "Brian";
let monthlyBudget = 45000;

// Expense data - array of objects
let expenses = [
  { name: "Groceries", amount: 5000, category: "Food", date: "2026-11-10" },
  { name: "Rent", amount: 15000, category: "Rent", date: "2026-11-01" },
  { name: "Matatu", amount: 2000, category: "Transportation", date: "2026-11-11" },
];

// ================= 2. COLLECT USER INPUT (prompts) =================
// Ask user for their info - with defaults if they press Cancel
let inputName = prompt("What is your name?", "Brian");
if (inputName) userName = inputName;

let inputBudget = prompt("What is your monthly budget in Ksh?", "45000");
if (inputBudget) monthlyBudget = Number(inputBudget);

let inputExpenseName = prompt("Enter an expense name:", "Lunch");
let inputExpenseAmount = prompt("How much did you spend in Ksh?", "500");
let inputExpenseCategory = prompt("What category? (Food, Rent, Transport...)", "Food");

// Only add if user entered an amount
if (inputExpenseName && inputExpenseAmount) {
  expenses.push({
    name: inputExpenseName,
    amount: Number(inputExpenseAmount),
    category: inputExpenseCategory || "Food",
    date: "2026-11-12"
  });
}

// ================= 3. REUSABLE FUNCTIONS =================
function calculateTotalSpent(allExpenses) {
  let total = 0;
  for (let expense of allExpenses) {
    total = total + expense.amount;
  }
  return total;
}

function calculateRemaining(budget, totalSpent) {
  return budget - totalSpent;
}

function calculatePercentageUsed(totalSpent, budget) {
  return (totalSpent / budget) * 100;
}

function formatKsh(amount) {
  return "Ksh " + amount.toLocaleString();
}

// ================= 4. PERFORM CALCULATIONS =================
let totalSpent = calculateTotalSpent(expenses);
let remaining = calculateRemaining(monthlyBudget, totalSpent);
let percentUsed = calculatePercentageUsed(totalSpent, monthlyBudget);

// ================= 5. DISPLAY RESULTS IN CONSOLE =================
console.log("===== SPENDWISE BUDGET REPORT =====");
console.log("User:", userName);
console.log("Monthly Budget:", formatKsh(monthlyBudget));
console.log("Total Spent:", formatKsh(totalSpent));
console.log("Remaining Balance:", formatKsh(remaining));
console.log("Budget Used:", percentUsed.toFixed(1) + "%");
console.log("Number of Expenses:", expenses.length);
console.log("All Expenses:", expenses);

if (remaining < 0) {
  console.log("Warning: You are OVER budget!");
} else if (remaining < 5000) {
  console.log("Warning: You are almost out of budget.");
} else {
  console.log("Status: You are within budget. Good job!");
}

// ================= 6. UPDATE PAGE (so dashboard still works) =================
// Header + Sidebar
document.querySelector(".main-header h1").textContent = "Welcome back, " + userName;
document.querySelector(".sidebar-footer strong").textContent = formatKsh(monthlyBudget);
document.querySelector(".sidebar-footer small").textContent = percentUsed.toFixed(0) + "% used";
document.querySelector(".progress span").style.width = percentUsed + "%";

// Summary cards
document.querySelectorAll(".summary strong")[0].textContent = formatKsh(totalSpent);
document.querySelectorAll(".summary strong")[1].textContent = formatKsh(remaining);

// Table
let tbody = document.querySelector("#your-expenses tbody");
tbody.innerHTML = "";
for (let expense of expenses) {
  let row = document.createElement("tr");
  row.innerHTML = `
    <td>${expense.name}</td>
    <td>${formatKsh(expense.amount)}</td>
    <td>${expense.category}</td>
    <td>${expense.date}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;
  tbody.appendChild(row);
}
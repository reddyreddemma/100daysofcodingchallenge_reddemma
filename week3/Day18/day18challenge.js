// Create a personal finance tracker
function createFinanceTracker() {
  // Private variables for income and expenses
  let totalIncome = 0;
  let totalExpenses = 0;

  // Function to add income
  const addIncome = (amount) => {
    totalIncome += amount;
  };

  // Function to add an expense
  const addExpense = (amount) => {
    totalExpenses += amount;
  };

  // Function to calculate the balance
  const calculateBalance = () => {
    return totalIncome - totalExpenses;
  };

  // Return public methods
  return {
    addIncome,
    addExpense,
    calculateBalance,
  };
}

// Example usage
const financeTracker = createFinanceTracker();
financeTracker.addIncome(1000); // Add income of $1000
financeTracker.addExpense(300); // Add expense of $300
financeTracker.addIncome(500); // Add additional income of $500

// Calculate and display balance
const balance = financeTracker.calculateBalance();
console.log(`Your current balance is $${balance}`);

// Get the Total of all expenses

export default (expenses) => {
  return expenses.map((expense) => expense.amount).reduce((accu, currVal) => accu + currVal, 0);
};

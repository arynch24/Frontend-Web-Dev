document.addEventListener('DOMContentLoaded', () => {
  const expenseForm = document.getElementById('expense-form');
  const expenseNameInput = document.getElementById('expense-name');
  const expenseAmountInput = document.getElementById('expense-amount');
  const expenseList = document.getElementById('expense-list');
  const totalAmountDisplay = document.getElementById('total-amount');

  let totalAmount = 0;

  let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  expenses.forEach(e => {
    renderExpenses(e);
  });

  expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const expenseItem = {
      id: Date.now(),
      expenseName: expenseNameInput.value.trim(),
      expenseAmount: expenseAmountInput.value.trim(),
    }

    expenses.push(expenseItem);
    saveExpenses();

    expenseAmountInput.value = "";
    expenseNameInput.value = "";

    renderExpenses(expenseItem);
  })

  function renderExpenses(expenseItem) {

    const item = document.createElement('li');
    item.innerHTML = `<span>${expenseItem.expenseName} - $${expenseItem.expenseAmount}</span> <button>Delete</button>`

    expenseList.appendChild(item);

    totalAmount += Number(expenseItem.expenseAmount);
    totalAmountDisplay.textContent = totalAmount;


    item.querySelector('button').addEventListener('click', (e) => {
      e.stopPropagation();
      totalAmount -= Number(expenseItem.expenseAmount);
      totalAmountDisplay.textContent = totalAmount;

      expenses = expenses.filter(e => e.id !== expenseItem.id);
      item.remove();

      saveExpenses();
    })
  }

  function saveExpenses() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }

})
import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const saveExpenseDateHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;

import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem() {
  // set of codes for dynamic purposes
  const expenseDate = new Date(2021, 2, 28); //Month always start with 0
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  return (
    // this is JSX code
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      {/* Date objects cannot be outputed as text */}
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

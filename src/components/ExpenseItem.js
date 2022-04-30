import React from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

// We can now get the data outside of these parameter by using props
// use props all the time for best practices
// props make use your component reusable
export default function ExpenseItem(props) {
  // set of codes for dynamic purposes

  return (
    // this is JSX code
    // You cannot use your custom components as wrappers
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

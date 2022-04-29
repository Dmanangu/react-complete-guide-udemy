import React from "react";
import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  // set of codes for dynamic purposes
  // Use this toLocaleString for cleaner code
  // create it to become constant so that the jsx file is cleaner
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      {/* <div>{props.date.toISOString()}</div> Change this to more readable code by */}
      {/* Date objects cannot be outputed as text */}
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

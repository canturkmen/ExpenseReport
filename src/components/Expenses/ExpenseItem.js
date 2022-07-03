import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  // The region where you have your custom functions and states.

  const [title, setTitle] = useState(props.title);

  function clickHandler(event) {
    setTitle("Updated");
    console.log("Clicke Event Happened. ")
  }

  // JSX Region

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button> 
    </Card>
  );
}

export default ExpenseItem;

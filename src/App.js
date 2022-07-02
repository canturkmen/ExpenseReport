import React from "react";

import "./App.css";
import Expenses from "./components/Expenses";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 200,
    date: new Date(2022, 5, 12),
  },
];

function App() {

  // This is our JSX syntax
  // return (
  //   <div>
  //     <h2>Let's Get Started !</h2>
  //     <Expenses expenses={expenses}></Expenses>;
  //   </div>
  // );

  // This what the React does when you compile the code.
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started"),
    React.createElement(Expenses, {expenses: expenses})
  );
}

export default App;

import React from "react";
import Card from "./UI/Card";
import classes from "./Todos.module.css";
import Task from "./Task";

const Todos = (props) => {
  return (
    <ul className={classes.todos}>
      <Task />
      <Task />
      <Task />
      <Task />
    </ul>
  );
};

export default Todos;

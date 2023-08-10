import React, { useContext } from "react";
import classes from "./Todos.module.css";
import Task from "./Task";
import TaskContext from "../store/task-context";

const Todos = (props) => {
  const tasksCtx = useContext(TaskContext);
  const tasks = tasksCtx.tasks.map((task) => {
    return <Task key={task.id} taskText={task.text} />;
  });
  return <ul className={classes.todos}>{tasks}</ul>;
};

export default Todos;

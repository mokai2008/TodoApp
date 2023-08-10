import React, { useContext } from "react";
import classes from "./Todos.module.css";
import Task from "./Task";
import TaskContext from "../store/task-context";

const Todos = (props) => {
  const tasksCtx = useContext(TaskContext);
  const deleteHandler = (id) => {
    tasksCtx.removeTask(id);
  };
  const tasks = tasksCtx.tasks.map((task) => {
    return (
      <Task
        key={task.id}
        taskText={task.text}
        onRemove={deleteHandler.bind(null, task.id)}
      />
    );
  });
  return <ul className={classes.todos}>{tasks}</ul>;
};

export default Todos;

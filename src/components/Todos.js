import React, { useContext, useEffect, useState } from "react";
import classes from "./Todos.module.css";
import Task from "./Task";
import TaskContext from "../store/task-context";
import FilterTodo from "./FilterTodo";

const Todos = (props) => {
  const [filterTasks, setFilterTasks] = useState("");
  const [tasks, setTasks] = useState([]);
  const tasksCtx = useContext(TaskContext);

  useEffect(() => {
    console.log(filterTasks);
    const tasks = tasksCtx.tasks.filter((task) => {
      switch (filterTasks) {
        case "completed":
          return task.status == "completed";
        case "notcompleted":
          return task.status == "notcompleted";
        default:
          return task.status == "completed" || "notcompleted";
      }
    });

    setTasks(tasks);
  }, [filterTasks, tasksCtx.tasks]);

  const filterHandler = (filter) => {
    setFilterTasks(filter);
  };
  const deleteHandler = (id) => {
    tasksCtx.removeTask(id);
  };

  const statusHandler = (id) => {
    tasksCtx.changeStatus(id);
  };

  const showTasks = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        taskText={task.text}
        onRemove={deleteHandler.bind(null, task.id)}
        onStatus={statusHandler.bind(null, task.id)}
      />
    );
  });

  return (
    <>
      <FilterTodo onFilter={filterHandler} />
      <ul className={classes.todos}>{showTasks}</ul>
    </>
  );
};

export default Todos;

import React, { useContext, useEffect, useState } from "react";
import classes from "./Todos.module.css";
import Task from "./Task";
import TaskContext from "../store/task-context";
import FilterTodo from "./FilterTodo";
import { useDispatch, useSelector } from "react-redux";
import { taskActions } from "../store";

const Todos = (props) => {
  const dispatch = useDispatch();
  const [filterTasks, setFilterTasks] = useState("");
  const [tasks, setTasks] = useState([]);
  // const tasksCtx = useContext(TaskContext);
  const tasksStore = useSelector((state) => state.tasks);

  useEffect(() => {
    const tasks = tasksStore.filter((task) => {
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
  }, [filterTasks, tasksStore]);

  const filterHandler = (filter) => {
    setFilterTasks(filter);
  };
  const deleteHandler = (id) => {
    dispatch(taskActions.removeTask(id));
  };

  const statusHandler = (id) => {
    dispatch(taskActions.changeStatus(id));
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

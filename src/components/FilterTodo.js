import React, { useState } from "react";
import classes from "./FilterTodo.module.css";

const FilterTodo = (props) => {
  const [filterTask, setFilterTask] = useState();
  const selectChangeHandler = (e) => {
    setFilterTask(e.target.value);
    props.onFilter(e.target.value);
  };

  return (
    <div className={classes.form}>
      <div>
        <label htmlFor="filter">Filter Tasks</label>
        <select onChange={selectChangeHandler} value={filterTask}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="notcompleted">Not Completed</option>
        </select>
      </div>
    </div>
  );
};

export default FilterTodo;

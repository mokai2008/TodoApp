import React from "react";
import classes from "./FilterTodo.module.css";

const FilterTodo = (props) => {
  return (
    <form className={classes.form}>
      <div>
        <label htmlFor="filter">Filter Tasks</label>
        <select>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="notCompleted">Not Completed</option>
        </select>
      </div>
    </form>
  );
};

export default FilterTodo;

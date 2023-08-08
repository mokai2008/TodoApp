import React from "react";
import classes from "./InputTodo.module.css";

const InputTodo = (props) => {
  return (
    <form className={classes.form}>
      <div>
        <input type="text" name="inputText" placeholder="Write your task" />
      </div>
      <div>
        <button type="submit" className={classes.button}>
          ADD
        </button>
      </div>
    </form>
  );
};

export default InputTodo;

import React, { useRef, useState, useContext } from "react";
import classes from "./InputTodo.module.css";
import TaskContext from "../store/task-context";

const InputTodo = (props) => {
  const taskCtx = useContext(TaskContext);
  const inputTextRef = useRef();
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputTextRef.current.value.trim().length === 0) {
      setError(true);
      setErrorMsg("Please input your task");
      return;
    }

    taskCtx.addTask(inputTextRef.current.value);
    setInputText("");
  };

  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          name="inputText"
          placeholder="Write your task"
          ref={inputTextRef}
          value={inputText}
          onChange={inputChangeHandler}
          autoFocus
        />
        {error ? <p className={classes.error}>{errorMsg}</p> : ""}
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

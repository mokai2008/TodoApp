import React, { useRef, useState } from "react";
import classes from "./InputTodo.module.css";
import { taskActions } from "../store/index";
import { useDispatch } from "react-redux";

const InputTodo = (props) => {
  const dispatch = useDispatch();
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
    dispatch(taskActions.addTask(inputTextRef.current.value));
    // taskCtx.addTask(inputTextRef.current.value);

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

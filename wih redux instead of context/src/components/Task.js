import React from "react";
import Card from "./UI/Card";
import classes from "./Task.module.css";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = (props) => {
  return (
    <Card>
      <li className={classes.item}>
        <p>{props.taskText}</p>
        <div>
          <button onClick={props.onStatus}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button className={classes.delete} onClick={props.onRemove}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
      </li>
    </Card>
  );
};

export default Task;

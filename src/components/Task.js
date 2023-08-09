import React from "react";
import Card from "./UI/Card";
import classes from "./Task.module.css";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = (props) => {
  return (
    <Card>
      <li className={classes.item}>
        <p>lorum ipsim kfsklfh sjhf jskh jfdhskj hfkhkjhk s</p>
        <div>
          <button>
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button className={classes.delete}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
      </li>
    </Card>
  );
};

export default Task;

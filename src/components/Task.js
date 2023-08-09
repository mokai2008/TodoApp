import React from "react";
import Card from "./UI/Card";
import classes from "./Task.module.css";

const Task = (props) => {
  return (
    <Card>
      <li className={classes.item}>
        <p>lorum ipsim kfsklfh sjhf jskh jfdhskj hfkhkjhk s</p>
        <div>
          <button>H</button>
          <button className={classes.delete}>M</button>
        </div>
      </li>
    </Card>
  );
};

export default Task;

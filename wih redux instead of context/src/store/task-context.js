import React from "react";

const TaskContext = React.createContext({
  tasks: [],
  addTask: (task) => {},
  removeTask: (id) => {},
  changeStatus: (id) => {},
});

export default TaskContext;

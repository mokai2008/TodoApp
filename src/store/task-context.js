import React from "react";

const TaskContext = React.createContext({
  tasks: [],
  getTasks: () => {},
  addTask: (task) => {},
  removeTask: (id) => {},
});

export default TaskContext;

import { useReducer } from "react";
import TaskContext from "./task-context";

const initalState = {
  tasks: [],
};

const tasksReducer = (state, action) => {
  return initalState;
};

const TasksProvider = (props) => {
  const [taskState, dispatch] = useReducer(tasksReducer, initalState);

  const addTaskHandler = (task) => {
    dispatch({ type: "ADD", item: task });
  };

  const initialValue = {
    tasks: taskState.tasks,
    getTasks: () => {},
    addTask: addTaskHandler,
    removeTask: (id) => {},
  };
  return (
    <TaskContext.Provider value={initialValue}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TasksProvider;

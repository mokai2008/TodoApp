import { useReducer } from "react";
import TaskContext from "./task-context";

const initalState = {
  tasks: [],
};

const tasksReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTasks = state.tasks.concat({
      id: state.tasks.length + 1,
      text: action.item,
      status: "not Completed",
    });
    console.log(updatedTasks);
    return {
      tasks: updatedTasks,
    };
  }

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

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
      status: "notcompleted",
    });
    return {
      tasks: updatedTasks,
    };
  }
  if (action.type === "REMOVE") {
    const updatedTasks = state.tasks.filter((task) => task.id !== action.id);

    return {
      tasks: updatedTasks,
    };
  }

  if (action.type === "STATUS") {
    const itemIndex = state.tasks.findIndex((task) => task.id === action.id);
    const item = state.tasks[itemIndex];

    const updatedItem = { ...item, status: "completed" };

    const updatedTasks = [...state.tasks];

    updatedTasks[itemIndex] = updatedItem;

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

  const removeTasksHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const statusHandler = (id) => {
    dispatch({ type: "STATUS", id: id });
  };

  const initialValue = {
    tasks: taskState.tasks,
    changeStatus: statusHandler,
    addTask: addTaskHandler,
    removeTask: removeTasksHandler,
  };
  return (
    <TaskContext.Provider value={initialValue}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TasksProvider;

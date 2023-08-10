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
  if (action.type === "REMOVE") {
    const updatedTasks = state.tasks.filter((task) => task.id !== action.id);

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

  const initialValue = {
    tasks: taskState.tasks,
    getTasks: () => {},
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

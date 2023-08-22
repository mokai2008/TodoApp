import logo from "./logo.svg";
import "./App.css";
import InputTodo from "./components/InputTodo";
import Todos from "./components/Todos";
import TasksProvider from "./store/task-provider";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks, sendData } from "./store/index";
let initalize = true;

function App() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  useEffect(() => {
    if (initalize) {
      initalize = false;
      return;
    }

    dispatch(sendData(tasks));
  }, [dispatch, tasks]);
  return (
    <div className="App">
      <header>
        <h1>ToDo List App</h1>
      </header>
      <InputTodo />
      <Todos />
    </div>
  );
}

export default App;

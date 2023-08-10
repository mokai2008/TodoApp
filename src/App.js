import logo from "./logo.svg";
import "./App.css";
import InputTodo from "./components/InputTodo";
import FilterTodo from "./components/FilterTodo";
import Todos from "./components/Todos";
import TasksProvider from "./store/task-provider";

function App() {
  return (
    <TasksProvider>
      <div className="App">
        <header>
          <h1>ToDo List App</h1>
        </header>
        <InputTodo />
        <FilterTodo />
        <Todos />
      </div>
    </TasksProvider>
  );
}

export default App;

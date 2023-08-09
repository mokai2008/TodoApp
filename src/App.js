import logo from "./logo.svg";
import "./App.css";
import InputTodo from "./components/InputTodo";
import FilterTodo from "./components/FilterTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <header>
        <h1>ToDo List App</h1>
      </header>
      <InputTodo />
      <FilterTodo />
      <Todos />
    </div>
  );
}

export default App;

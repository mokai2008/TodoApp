import logo from "./logo.svg";
import "./App.css";
import InputTodo from "./components/InputTodo";

function App() {
  return (
    <div className="App">
      <header>
        <h1>ToDo List App</h1>
      </header>
      <InputTodo />
    </div>
  );
}

export default App;

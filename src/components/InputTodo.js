import React from "react";

const InputTodo = (props) => {
  return (
    <form>
      <div>
        <label htmlFor="inputText">Your Task</label>
        <input type="text" name="inputText" />
      </div>
      <div>
        <button type="submit">ADD</button>
      </div>
    </form>
  );
};

export default InputTodo;

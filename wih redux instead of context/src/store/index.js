import { createSlice, configureStore } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: { tasks: [] },
  reducers: {
    replaceTasks(state, action) {
      state.tasks = action.payload.tasks;
    },
    addTask(state, action) {
      state.tasks.push({
        id: state.tasks.length + 1,
        text: action.payload,
        status: "notcompleted",
      });
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    changeStatus(state, action) {
      const itemIndex = state.tasks.findIndex(
        (task) => task.id == action.payload
      );
      state.tasks[itemIndex].status = "completed";
    },
  },
});

export const taskActions = taskSlice.actions;

export const fetchTasks = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-5ae5b-default-rtdb.firebaseio.com/tasks.json"
      );
      const data = await response.json();
      return data;
    };

    const tasksData = await sendRequest();
    dispatch(
      taskSlice.actions.replaceTasks({
        tasks: tasksData || [],
      })
    );
  };
};

export const sendData = (tasks) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-5ae5b-default-rtdb.firebaseio.com/tasks.json",
        {
          method: "PUT",
          body: JSON.stringify(tasks),
        }
      );
    };
    await sendRequest();
  };
};

const store = configureStore({
  reducer: taskSlice.reducer,
});
export default store;

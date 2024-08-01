import { listItem, TodoAction } from "./types";

function TodoReducer(state: any, action: TodoAction): listItem[] {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo: listItem) => todo.id !== action.payload);
    case "TOGGLE_TODO":
      return state.map((todo: listItem) => {
        todo.editStatus = false;
        if (todo.id === action.payload) {
          return {
            ...todo,
            editStatus: !todo.editStatus,
          };
        }
        return todo;
      });
    case "UPDATE_TODO":
      return state.map((todo: listItem) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
          };
        }
        return todo;
      });
    case "TOGGLE_TODO_COMPLETE":
      return state.map((todo: listItem) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: action.payload.completed,
          };
        }
        return todo;
      });
    case "RESET_EDIT_STATUS":
      return state.map((todo: listItem) => {
        todo.editStatus = false;
        return todo;
      });
    default:
      return state;
  }
}

export default TodoReducer;

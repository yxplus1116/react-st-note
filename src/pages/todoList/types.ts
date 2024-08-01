import React from "react";

export interface listItem {
  id: string | number;
  title: string;
  status: number;
  editStatus: boolean;
  completed: boolean;
}

export interface listProps {
  list: listItem[];
  label?: string;
}

export interface itemProps {
  item: listItem;
  index: number;
}

export interface todoContextProps {
  dispatchTodoList: React.Dispatch<TodoAction>;
  list: listItem[];
}

interface AddAction {
  type: "ADD_TODO";
  payload: listItem;
}

interface DeleteAction {
  type: "DELETE_TODO";
  payload: string | number;
}

interface EditAction {
  type: "TOGGLE_TODO";
  payload: string | number;
}

interface UpdateAction {
  type: "UPDATE_TODO";
  payload: {
    id: string | number;
    title: string;
  };
}
interface ToggleComplete {
  type: "TOGGLE_TODO_COMPLETE";
  payload: {
    id: string | number;
    completed: boolean;
  };
}

interface ResetEditStatusAction {
  type: "RESET_EDIT_STATUS";
}

export type TodoAction =
  | AddAction
  | DeleteAction
  | EditAction
  | UpdateAction
  | ResetEditStatusAction
  | ToggleComplete;

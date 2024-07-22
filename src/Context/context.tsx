import { createContext } from "react";
import { ITask } from "../mockData";

export interface IContext {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  updateTasks: (tasks: ITask[]) => void;
}

export const context: IContext = {
  tasks: [],
  addTask: (task) => {},
  updateTasks: (task) => {},
};

export const TaskContext = createContext(context);

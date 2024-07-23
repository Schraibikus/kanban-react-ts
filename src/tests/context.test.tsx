import { ITask } from "../mockData";
import { IContext } from "../Context/context";

// Unit test for IContext interface
describe("IContext interface", () => {
  test("has tasks field of type ITask[]", () => {
    const context: IContext = {
      tasks: [],
      addTask: () => {},
      updateTasks: () => {},
    };
    expect(context.tasks).toEqual([]);
  });

  test("addTask function has correct signature", () => {
    const context: IContext = {
      tasks: [],
      addTask: (task: ITask) => {},
      updateTasks: () => {},
    };
    expect(typeof context.addTask).toBe("function");
  });

  test("updateTasks function has correct signature", () => {
    const context: IContext = {
      tasks: [],
      addTask: () => {},
      updateTasks: (tasks: ITask[]) => {},
    };
    expect(typeof context.updateTasks).toBe("function");
  });
});

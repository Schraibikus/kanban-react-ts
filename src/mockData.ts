export interface ITask {
  id: number;
  title: string;
  description: string;
  status: string;
}

export const TASKS: ITask[] = [
  { id: 0, title: "Task 1", description: "Description 1", status: "backlog" },
  { id: 1, title: "Task 2", description: "Description 2", status: "backlog" },
  { id: 2, title: "Task 3", description: "Description 3", status: "backlog" },
  { id: 3, title: "Task 4", description: "Description 4", status: "backlog" },
];

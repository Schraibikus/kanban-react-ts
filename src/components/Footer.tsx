import { useContext } from "react";
import { TaskContext } from "../Context/context";

export const Footer: React.FC = () => {
  const { tasks } = useContext(TaskContext);

  const showActiveTasks: number = tasks.filter(
    (task) => task.status === "ready"
  ).length;
  const showFinishedTasks: number = tasks.filter(
    (task) => task.status === "finished"
  ).length;
  return (
    <footer className="flex items-center justify-between h-14 text-white text-lg bg-secondary-blue px-5 py-2 min-h-[55px]">
      <div className="flex gap-4">
        <p>
          Active tasks:
          <span>{showActiveTasks}</span>
        </p>
        <p>
          Finished tasks:
          <span>{showFinishedTasks}</span>
        </p>
      </div>
      <div>
        <p>Kanban board by Schraibikus, 2024</p>
      </div>
    </footer>
  );
};

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../Context/context";

interface TaskProps {
  name: string;
  id: number;
}

export default function Task(props: TaskProps): JSX.Element {
  const optionsItemClassName =
    "flex justify-center items-center w-full h-[20px] text-black hover:text-red-500 cursor-pointer";

  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const { tasks, updateTasks } = useContext(TaskContext);

  function showOptionsHandler(): void {
    setIsOptionVisible((prev) => !prev);
  }

  function deleteTaskHandler(): void {
    const updatedTasks = tasks.filter((task) => task.id !== props.id);
    updateTasks(updatedTasks);
  }

  return (
    <div
      className="bg-white shadow-md rounded-lg flex justify-between items-center p-2 mb-5 relative"
      task-id={props.id}
      data-testid="task"
    >
      <p>{props.name}</p>
      <button
        className="bg-task-settings bg-no-repeat w-[4px] h-[11px] absolute right-2 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-300"
        onClick={showOptionsHandler}
        data-testid="settings"
      ></button>
      {isOptionVisible && (
        <div className="bg-primary-gray rounded-lg absolute top-0 right-10 w-[70px] hover:bg-secondary-gray">
          <Link
            to={`/edit?task=${props.id}`}
            className={optionsItemClassName}
            data-testid="editButton"
          >
            Edit
          </Link>
          <button className={optionsItemClassName} onClick={deleteTaskHandler}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

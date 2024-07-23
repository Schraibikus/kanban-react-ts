import { useContext, useEffect, useRef, useState } from "react";
import { TaskContext } from "../Context/context";
import { buttonStyleNormal } from "./AddButton";

interface SelectButtonProps {
  className: string;
}

interface IPrevGroupClassName {
  ready: string;
  progress: string;
  finished: string;
}

const PrevGroupClassName: IPrevGroupClassName = {
  ready: "backlog",
  progress: "ready",
  finished: "progress",
};
export default function SelectButton(props: SelectButtonProps) {
  const [buttonClassName, setButtonClassName] = useState(
    `${buttonStyleNormal} select_${props.className}`
  );
  const selectRef = useRef<HTMLButtonElement>(null);
  const { tasks, updateTasks } = useContext(TaskContext);
  const currentTasks = tasks.filter(
    (task) =>
      task.status ===
      PrevGroupClassName[props.className as keyof IPrevGroupClassName]
  );
  const [isSelectShowed, setIsSelectShowed] = useState(false);

  useEffect(() => {
    setButtonClassName(`${buttonStyleNormal} select_${props.className}`);
  }, [props.className]);

  function toggleSelectHandler() {
    if (selectRef.current!.classList.contains(buttonStyleNormal)) return;
    setIsSelectShowed((prev) => !prev);
  }

  function selectTaskHandler(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const taskID: string | null = e.currentTarget.getAttribute("data-key");
    if (!taskID) return;
    const updatedTasks = tasks.map((task) => {
      if (task.id.toString() === taskID) {
        return { ...task, status: props.className };
      }
      return task;
    });
    updateTasks(updatedTasks);
    setIsSelectShowed((prev) => !prev);
  }

  return (
    <>
      <button
        ref={selectRef}
        className={buttonClassName}
        onClick={toggleSelectHandler}
        disabled={currentTasks.length === 0}
      >
        {" "}
        + Add Card
      </button>

      {isSelectShowed && (
        <ul className="rounded-lg bg-white p-2 mt-2 cursor-pointer">
          {currentTasks.map((task) => {
            return (
              <li
                className="text-black hover:text-red-500 transition-all duration-300 p-1"
                key={task.id}
                data-key={task.id}
                onClick={selectTaskHandler}
              >
                {task.title}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

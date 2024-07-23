import { useContext, useEffect, useRef, useState } from "react";
import { TaskContext } from "../Context/context";
import { Link, useLocation } from "react-router-dom";

export default function EditCard() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { tasks, updateTasks } = useContext(TaskContext);
  const taskID = +useLocation().search.split("=")[1];
  const [textAreaValue, setTextAreaValue] = useState(tasks[taskID].description);

  function changeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextAreaValue(event.target.value);
  }

  function saveChangesHandler() {
    const updatedTasks = tasks;
    updatedTasks.filter((task) => task.id === taskID)[0].description =
      textAreaValue;
    updateTasks(updatedTasks);
  }

  useEffect(() => {
    textAreaRef.current!.value = tasks[taskID].description;
  }, [taskID, tasks, textAreaValue]);

  return (
    <section
      className="bg-white shadow-md rounded-lg p-5 w-[95vw] h-[80vh] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      data-testid="edit-page"
    >
      <p className="mb-8">{tasks[taskID].title}</p>
      <textarea
        ref={textAreaRef}
        className="w-full min-h-[30%] text-black p-5 border rounded-lg outline-black resize-none placeholder:text-secondary-gray-text"
        onChange={changeHandler}
        placeholder="This task has no description"
        value={textAreaValue}
        data-testid="text-area"
      ></textarea>
      <div className="flex gap-5 mt-5">
        <Link
          to="/"
          className="w-[100px] h-[30px] bg-secondary-blue rounded-lg p-1 text-sm text-white text-center cursor-pointer transition-all duration-300 hover:bg-primary-blue"
          onClick={saveChangesHandler}
          data-testid="edit-save"
        >
          Save
        </Link>
        <Link
          to="/"
          className="w-[100px] h-[30px] bg-[tomato] rounded-lg p-1 text-sm text-white text-center cursor-pointer transition-all duration-300 hover:bg-red-300"
        >
          Close
        </Link>
      </div>
    </section>
  );
}

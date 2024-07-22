import { useContext, useEffect, useRef, useState } from "react";
import { TaskContext } from "../Context/context";
import { Link, useLocation } from "react-router-dom";
import "./main.css";

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
    <section className="edit" data-testid="edit-page">
      <p className="edit__task-title">{tasks[taskID].title}</p>
      <textarea
        ref={textAreaRef}
        className="edit__task-description"
        onChange={changeHandler}
        placeholder="This task has no description"
        value={textAreaValue}
        data-testid="text-area"
      ></textarea>
      <Link
        to="/"
        className="edit__button edit__save"
        onClick={saveChangesHandler}
        data-testid="edit-save"
      >
        Save
      </Link>
      <Link to="/" className="edit__button edit__close">
        Close
      </Link>
    </section>
  );
}

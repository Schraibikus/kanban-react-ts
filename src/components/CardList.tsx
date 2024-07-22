import { useContext } from "react";
import { TaskContext } from "../Context/context";
import Task from "./Task";
import AddButton from "./AddButton";
import SelectButton from "./SelectButton";
import "./group.css";

interface CardListProps {
  className: string;
  title: string;
}

export default function CardList(props: CardListProps) {
  const groupName = props.className.slice(props.className.indexOf("__") + 2);

  const groupClassName = `group ${props.className}`;
  const { tasks } = useContext(TaskContext);

  const filteredTasks = tasks.filter((task) => task.status === groupName);

  return (
    <section className={groupClassName}>
      <p className="text-lg mb-5">{props.title}</p>

      {filteredTasks.map((task) => (
        <Task name={task.title} key={task.id} id={task.id}></Task>
      ))}

      {groupClassName.includes("backlog") ? (
        <AddButton></AddButton>
      ) : (
        <SelectButton className={groupName}></SelectButton>
      )}
    </section>
  );
}

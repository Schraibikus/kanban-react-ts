import { useContext } from "react";
import { TaskContext } from "../Context/context";
import Task from "./Task";
import AddButton from "./AddButton";
import SelectButton from "./SelectButton";

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
    <section className="bg-primary-gray shadow-md rounded-[10px] p-5 max-h-[calc(100vh-300px)] overflow-auto">
      <p className="text-lg mb-5">{props.title}</p>

      {filteredTasks.map((task) => (
        <Task name={task.title} key={task.id} id={task.id}></Task>
      ))}

      {groupClassName.includes("backlog") ? (
        <AddButton />
      ) : (
        <SelectButton className={groupName}></SelectButton>
      )}
    </section>
  );
}

export type TaskProps = {
  title: string;
  description?: string;
};

export const tasks = [
  { id: 1, title: "Task 1", description: "Description 1" },
  { id: 2, title: "Task 2", description: "Description 2" },
  { id: 3, title: "Task 3", description: "Description 3" },
  { id: 4, title: "Task 4", description: "Description 4" },
];

export const Task = (props: TaskProps) => {
  return (
    <>
      <div className="bg-white rounded-[5px] p-4 mb-4">{props.title}</div>
    </>
  );
};

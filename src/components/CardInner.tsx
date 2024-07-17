import { TaskProps } from "./Task";

export const CardInner = (props: TaskProps) => {
  return (
    <div className="bg-white rounded-xl p-4 h-full z-10 w-[95vw] h-[90vh] px-6 py-4 relative">
      <h2 className="text-2xl mb-9">{props.title}</h2>
      <p className="text-lg">{props.description}</p>
      <button className="absolute top-4 right-4">
        <img width={40} height={40} src="/Close.png" alt="Close" />
      </button>
    </div>
  );
};

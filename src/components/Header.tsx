import { useState } from "react";

export const Header: React.FC = () => {
  const [selected, setSelected] = useState(false);

  function showSelectionHandler(): void {
    setSelected((prev) => !prev);
    document.querySelector(".dropdown-header")?.classList.toggle("rotate-180");
  }

  return (
    <header className="header flex justify-between px-5 py-2 bg-secondary-blue min-h-[55px]">
      <h1 className="text-white text-3xl">Awesome Kanban Board</h1>
      <div className="flex gap-4 relative">
        <img width={40} height={40} src="/User.svg" alt="User" />
        <button onClick={showSelectionHandler}>
          <img
            className="dropdown-header cursor-pointer"
            src="/DropArrow.svg"
            alt="Dropdown"
          />
        </button>
        {selected ? (
          <div className="flex flex-col w-[134px] h-[60px] bg-white rounded-lg justify-center items-center absolute top-12 right-0 z-10">
            <button className="text-black text-lg hover:bg-gray-200 w-[120px]">
              Profile
            </button>
            <button className="text-black text-lg hover:bg-gray-200 w-[120px]">
              Log Out
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
};

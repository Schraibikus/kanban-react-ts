export const BacklogCard = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    return <input type="text" placeholder="Add task" />;
    // You can add more code here if needed.
  };
  return (
    <div className="min-w-[24%] bg-[#ebecf0] rounded-xl p-4  relative">
      <div className="text-lg mb-5">Backlog</div>
      <div className="card mt-5 relative overflow-auto max-h-[85%] mb-5">
        <div>{/* <input type="text" placeholder="Add task" /> */}</div>
      </div>
      <button
        onClick={handleClick}
        className="w-[102px] h-[29px] pl-[5px] text-gray-500 text-lg flex items-center gap-1 hover:bg-white hover:text-black hover:rounded-md absolute bottom-4"
      >
        <img width={16} height={16} src="/Plus.svg" alt="Plus" /> Add card
      </button>
    </div>
  );
};

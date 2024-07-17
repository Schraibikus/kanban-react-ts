export const Footer = () => {
  return (
    <footer className="flex items-center justify-between h-14 text-white text-lg bg-secondary-blue px-5 py-2 min-h-[55px]">
      <div className="flex gap-4">
        <p>
          Active tasks:
          <span>2</span>
        </p>
        <p>
          Finished tasks:
          <span>2</span>
        </p>
      </div>
      <div>
        <p>Kanban board by Schraibikus, 2024</p>
      </div>
    </footer>
  );
};

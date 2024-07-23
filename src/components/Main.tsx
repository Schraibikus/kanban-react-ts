import { Route, Routes } from "react-router-dom";
import EditCard from "./EditCard";
import CardList from "./CardList";

export const Main: React.FC = () => {
  return (
    <main className="min-h-[calc(100vh-113px)] py-5 px-9">
      <Routes>
        <Route path="/edit" element={<EditCard />} />
        <Route
          path="/"
          element={
            <section className="cards grid grid-cols-4 items-start gap-6 w-full">
              <CardList className="card__backlog" title="Backlog" />
              <CardList className="card__ready" title="Ready" />
              <CardList className="card__progress" title="In Progress" />
              <CardList className="card__finished" title="Finished" />
            </section>
          }
        />
      </Routes>
    </main>
  );
};

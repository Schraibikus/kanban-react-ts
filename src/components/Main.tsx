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
            <section className="groups grid grid-cols-4 gap-6 w-full">
              <CardList className="group__backlog" title="Backlog"></CardList>
              <CardList className="group__ready" title="Ready"></CardList>
              <CardList
                className="group__progress"
                title="In Progress"
              ></CardList>
              <CardList className="group__finished" title="Finished"></CardList>
            </section>
          }
        />
      </Routes>
    </main>
  );
};

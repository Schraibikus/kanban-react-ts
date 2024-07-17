import { Card } from "./Card";
import { cardNames } from "../cardNames";
import { BacklogCard } from "./BacklogCard";

export const CardList = () => {
  return (
    <div className="flex gap-6">
      <BacklogCard />
      {cardNames.map((cardName) => (
        <Card key={cardName} title={cardName} />
      ))}
    </div>
  );
};

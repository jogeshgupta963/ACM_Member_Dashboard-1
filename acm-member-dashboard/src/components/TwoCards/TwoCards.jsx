import React from "react";
import "./TwoCards.css";
import { twoCardsData } from "../../Data/Data";

import TwoCard from "../Card/Card";

const TwoCards = () => {
  return (
    <div className="TwoCards">
      {twoCardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <TwoCard
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              
            />
          </div>
        );
      })}
    </div>
  );
};

export default TwoCards;

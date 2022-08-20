import React from "react";
import "./FourCards.css";
import { fourCardsData } from "../../Data/Data";

import FourCard from "../FourCard/FourCard";

const FourCards = () => {
  return (
    <div className="FourCards">
      {fourCardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <FourCard
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

export default FourCards;

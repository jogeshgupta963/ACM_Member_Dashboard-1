import React from "react";
import "./FourCards.css";
import { fourCardsData } from "../../Data/Data";
import {
  UilUsdSquare,
  UilMoneyWithdrawal,
  UilCode,
} from "@iconscout/react-unicons";
import FourCard from "../FourCard/FourCard";

const FourCards = ({ dashData }) => {
  return (
    <div className="FourCards">
      {dashData.length &&
        dashData.map((card, id) => {
          return (
            <div className="parentContainer" key={id}>
              <FourCard
                title="Count"
                color={{
                  backGround: "#1e1b5b",
                }}
                barValue={card.count}
                value={card.value}
                png={UilUsdSquare}
              />
            </div>
          );
        })}
    </div>
  );
};

export default FourCards;

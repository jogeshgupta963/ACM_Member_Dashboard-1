import React from "react";
import "./TwoCards.css";
import { twoCardsData } from "../../Data/Data";
import {
  UilUsdSquare,
  UilMoneyWithdrawal,
  UilCode,
} from "@iconscout/react-unicons";
import TwoCard from "../Card/Card";

const TwoCards = ({ dashData }) => {
  return (
    <div className="TwoCards">
      {dashData.length &&
        dashData.map((card, id) => {
          return (
            <div className="parentContainer" key={id}>
              <TwoCard
                title="count"
                color={{
                  backGround: "#1e1b5b",
                }}
                barValue={card.count}
                value={card.value}
                png={UilUsdSquare}
                series={[
                  {
                    name: "Expenses",
                    data: [10, 25, 15, 30, 12, 15, 20],
                  },
                ]}
              />
            </div>
          );
        })}
    </div>
  );
};

export default TwoCards;

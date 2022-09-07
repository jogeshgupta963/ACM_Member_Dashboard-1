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
  console.log(dashData);
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

export default FourCards;

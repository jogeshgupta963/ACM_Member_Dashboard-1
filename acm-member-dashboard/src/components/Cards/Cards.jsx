import React from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";

// Sidebar imports
import {
  
  UilUsdSquare
} from "@iconscout/react-unicons";

import Card from "../Card/Card";
import { useSelector } from "react-redux";

const Cards = () => {
  const {user} = useSelector(state=>state.user)
  return (
    <div className="Cards">
      {user.bootcamps.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              
              color={{backGround: "white",}}
              barValue={70}
              value={card}
              png={UilUsdSquare}
              // series={card.series}
              
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

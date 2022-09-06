import React from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";

// Sidebar imports
// import {
  
//   UilUsdSquare
// } from "@iconscout/react-unicons";

import { AiFillGithub } from 'react-icons/ai';
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const Cards = () => {
  const {user} = useSelector(state=>state.user)
  return (
    <div className="Cards">
      {user.bootcamps && user.bootcamps.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card

              // title={card.title}
              // color={card.color}
              // barValue={card.barValue}
              // value={card.value}
              // png={card.png}
              // time={card.time}
              // series={card.series}

              color={{ backGround: "#1e1b5b" }}
              barValue={70}
              value={card}
              png={AiFillGithub}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

import React from "react";
import { useEffect, useState } from "react";
import Badge from "../../components/Badge/Badge";
import "./Badges.css";
import axios from 'axios';
// import {useSelector} from "react-redux"

function Badges() {
  // const {user} = useSelector(state=>state.user)
  const [badgesItem, setBadgesItem] = useState([{}]);

  const fetchBadge = async () => {
    try
    {
      const {data} = await axios.get('/badge')
      setBadgesItem(data)
    }
    catch(err)
    {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchBadge()
  }, [])

  return (
    <div className="Badges">
      {badgesItem.map((badge) => {
        return <Badge description={badge.description} />;
      })}
    </div>
  );
}

export default Badges;

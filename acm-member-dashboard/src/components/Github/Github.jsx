import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import './Github.css'

const Github = () => {
  return (
    <div className="gContainer">
    <GitHubCalendar username="Tusharbecoding"  style={{display: 'flex',flexDirection: 'column',position:'relative', top: '18%', width: '99%', left: '0.5%'}} />
    </div>
  )
}

export default Github
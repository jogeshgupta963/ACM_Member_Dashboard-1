import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import './Github.css'

const Github = () => {
  return (
    <div className="container">
    <GitHubCalendar username="Tusharbecoding"  style={{marginLeft: 20, marginTop: 20}} />
    </div>
  )
}

export default Github
import React from 'react'
import { NewsHeaderCard } from "react-ui-cards";
import './Projects.css'
import header from "../../imgs/header2.jpeg";

const Projects = () => {
  return (
    <div className = "container">
        <NewsHeaderCard
        className = "project-card"
        href='https://github-visualizer.acmthapar.com/#/home'
        thumbnail={header}
        title='Github Visualizer'
        tags={['Python', 'MongoDB' ,'Node.js', () => (<i>Flask</i>)]} 
        />
        <NewsHeaderCard
        className = "project-card"
        href='https://eclipse.acmthapar.com/'
        thumbnail={header}
        title='Eclipse Website'
        tags={['Javascript', 'React.js' ,'HTML', () => (<i>CSS</i>)]} 
        />
        <NewsHeaderCard
        className = "project-card"
        href='https://github.com/nekonee'
        thumbnail={header}
        title='DSA Diary'
        tags={['Python', 'MongoDB' ,'Node.js', () => (<i>Flask</i>)]} 
        />
    </div>
  )
}

export default Projects
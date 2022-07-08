import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
    return (
        <>
        <div class="vertical-nav bg-white" id="sidebar">
  

  
        <ul class="nav flex-column">
          <li class="nav-item">
            <a href="#" class="nav-link text-dark bg-light">
                      <i class="fa fa-home mr-3 text-primary fa-fw"></i>
                      home
                  </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-dark bg-light">
                      <i class="fa fa-bullhorn mr-3 text-primary fa-fw"></i>
                      announcements
                  </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-dark bg-light">
                      <i class="fa fa-certificate mr-3 text-primary fa-fw"></i>
                      Certificates
                  </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-dark bg-light">
                      <i class="fa fa-trophy mr-3 text-primary fa-fw"></i>
                      Projects
                  </a>
          </li>
        </ul>
      
        
      
        
      </div>
        </>
    )
}
 
export default Sidebar
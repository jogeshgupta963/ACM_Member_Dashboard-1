import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
    return (
        <>
        <div class="vertical-nav bg-white" id="sidebar">
        <div class="media-body">
            <button class="banner">banner</button>   
          </div>
        <div class="py-4 px-3 mb-4 bg-light">
          
          <div class="media d-flex align-items-center">
            <img loading="lazy" src="./profile.png" alt="profile" width="120" height="120" class="mr-3 rounded-circle img-thumbnail shadow-sm" />
          </div>
          <div class="media-body">
              <h4 class="m-0">Tushar Chopra</h4>    
          </div>
        </div>
      
        <p class=" px-3 large pb-4 mb-0 about">About</p>
      
        <ul class="nav flex-column bg-white mb-0">
          <li class="nav-item">
            <a href="#" class="nav-link text-dark bg-light">
                      <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
                      home
                  </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-dark">
                      <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                      about
                  </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-dark">
                      <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                      services
                  </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-dark">
                      <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                      Gallery
                  </a>
          </li>
        </ul>
      
        <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Charts</p>
      
        <ul class="nav flex-column bg-white mb-0">
          <li class="nav-item">
            <a href="#" class="nav-link text-dark">
                      <i class="fa fa-area-chart mr-3 text-primary fa-fw"></i>
                      area charts
                  </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-dark">
                      <i class="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
                      bar charts
                  </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-dark">
                      <i class="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
                      pie charts
                  </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-dark">
                      <i class="fa fa-line-chart mr-3 text-primary fa-fw"></i>
                      line charts
            </a>
          </li>
        </ul>
      </div>
        </>
    )
}
 
export default Sidebar
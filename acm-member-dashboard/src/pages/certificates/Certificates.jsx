import React from 'react'
import './Certificates.css';
import { UserCard } from 'react-ui-cards';
import { CertificatesData } from "../../Data/Data";
import header from "../../imgs/header2.jpeg";

const Certificates = () => {
  return (
    <div className="container">
    {CertificatesData.map((certificate) => {
      return (
      <>
      <UserCard 
      float
      href={certificate.url}
      header={header}
      avatar={certificate.img}
      name={certificate.title} 
      className="card"
      style={{backgroundColor: '#7FA8E5',}}
      />
      <UserCard 
      float
      href={certificate.url}
      header={header}
      avatar={certificate.img}
      name={certificate.title} 
      className="card"
      style={{backgroundColor: '#7FA8E5',}}
      />
      <UserCard 
      float
      href={certificate.url}
      header={header}
      avatar={certificate.img}
      name={certificate.title} 
      className="card"
      style={{backgroundColor: '#7FA8E5',}}
      />
      <UserCard 
      float
      href={certificate.url}
      header={header}
      avatar={certificate.img}
      name={certificate.title} 
      className="card"
      style={{backgroundColor: '#7FA8E5',}}
      />
      <UserCard 
      float
      href={certificate.url}
      header={header}
      avatar={certificate.img}
      name={certificate.title} 
      className="card"
      style={{backgroundColor: '#7FA8E5',}}
      />
      <UserCard 
      float
      href={certificate.url}
      header={header}
      avatar={certificate.img}
      name={certificate.title} 
      className="card"
      style={{backgroundColor: '#7FA8E5',}}
      />
      </>
      )
    })}
      
    </div>
    
  )
}

export default Certificates
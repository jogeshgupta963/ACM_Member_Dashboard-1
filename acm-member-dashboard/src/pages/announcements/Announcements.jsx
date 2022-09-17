import React from 'react'
import './Announcements.css'
import {useEffect, useState} from 'react'
import axios from 'axios'

function Announcements() {
    const [announcements, setAnnouncements] = useState([{}]);

    const fetchAnnouncements = async () => {
        try 
        {
            const {data} = await axios.get("/announcement")
            setAnnouncements(data)
        }
        catch(err)
        {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchAnnouncements()
    },[])


  return (
    <div className="Announcements">
    <h1 style={{textAlign: "center", marginBottom: "1.5em"}}>Announcements</h1>
    <table border="1">
        <thead>
            <tr>
                <td>Heading</td>
                <td>Type</td>
                <td>Venue</td>
                <td>Year</td>
                <td>Date</td>
            </tr>
        </thead>
        <tbody>
            {announcements.map((data) => { 
            return(
                <tr>
                    <td>{data.heading}</td>
                    <td>{data.type}</td>
                    <td>{data.venue}</td>
                    <td>{data.year}</td>
                    <td>{data.date}</td>
                </tr>
                )
            }
            )}    
        </tbody>
    </table>

    
    </div>
  )
}

export default Announcements
import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import './Cookbook.css'
import cookbook from '../images/nitrocookbook.gif'
function Cookbook() {

  const cardStyles = {
      
    
    width:'400px',
   
border: '0.65px solid rgba(255, 255, 255, 0.12)',
background: 'rgba(255, 255, 255, 0.08)',
color:'white',
padding:'15px'
  };

  return (
    <center>
    <div style={{backgroundColor:'rgba(0,0,0,0.8)',margin:'0',paddingTop:'30px',color:'white'}}>
      <h1>Cookbook</h1>

      <br></br>

      <div  >
      <Card style={cardStyles}>
     
        <br></br>
        <Card.Body>
        <img src={cookbook} style={{width:"300px"}} />
        <br></br> <br></br>
          <Card.Title>Router Nitro</Card.Title>
          <br></br>
          <a href="https://router-resources.github.io/nitrocourse/"> <button class="cbutton">Start the Journey</button></a>
         
        </Card.Body>
      </Card>
    </div>

     
    </div>
    </center>
  )
}

export default Cookbook

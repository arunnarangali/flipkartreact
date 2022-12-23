import React from 'react'
import { Button, Card, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
function Flipkart() {

  return (
   
    <div>
        <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home"> <img src="http://store-images.s-microsoft.com/image/apps.50328.9007199266245695.499c4aea-0b15-4a57-bde4-828c67dcac42.d4533419-70fe-4bc3-bdde-96310359e642" style={{ width: '75px' }} /><i>Flipkart </i></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Arun n</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

  </div>
  )
  
}

export default Flipkart
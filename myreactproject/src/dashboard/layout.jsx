
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,Outlet } from "react-router-dom";
import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Offcanvas from 'react-bootstrap/Offcanvas';
import navimg from "../assets/images/nav.png";
import img2 from "../assets/images/ganesh.jpg"



const Layout=()=>{

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return(
        <>
         <h6 className="port">My Portfolio</h6>
         <Image src={navimg} onClick={handleShow} style={{height:"90px", position:"relative" ,left:"1420px",top:"-10px"}}/>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton >
          <Offcanvas.Title><img src={img2}style={{height:"150px",width:"140px",borderRadius:"50%"}}/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
      <Navbar>
        <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav style={{display:"block",fontSize:"26px",fontWeight:"bolder"}}>
            <Nav.Link href="/home">Home</Nav.Link><br/>
            <Nav.Link href="/about">About</Nav.Link><br/>
            <Nav.Link href="/skill">Skills</Nav.Link><br/>
            <Nav.Link href="/project">Projects</Nav.Link><br/>
            <Nav.Link href="/contact">ContactUs</Nav.Link>
          </Nav>
      </Navbar>
      </Offcanvas.Body>
      </Offcanvas>
      <Outlet/>
        </>
    )
}
export default Layout;
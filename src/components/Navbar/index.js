import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './index.scss' 
import {Link, NavLink} from 'react-router-dom'


//import LogoS from '../../assets/Images/logo.png'

const CustNavbar = () => (
    <Navbar expand="lg" className="custom-navbar d-flex justify-content-between align-items-center">
      <Container fluid>
        <Link className='logo-name' to='/'>
            <Navbar.Brand className="custom-brand">Pawan Harikrishnan</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <NavLink exact="true" activeclassname="active" to="/">
                <p> <span class="spacer"></span> Home </p>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/about">
                <p> <span class="spacer"></span> About Me </p>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/work">
                <p> <span class="spacer"></span> Work Experience </p>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <p class="contact"> <span class="spacer"></span> Contact </p>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)

export default CustNavbar
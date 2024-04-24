import { Container } from "react-bootstrap";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

 export default function Navig()
{
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{fontFamily:"fantasy"}}>Fit Fusion</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Health Condiitions</Nav.Link>
            <Nav.Link href="#link">Discover</Nav.Link>
            <Nav.Link href="#Plans">Plans</Nav.Link>
            <NavDropdown title="Connect" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Contact">Phone</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Email
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
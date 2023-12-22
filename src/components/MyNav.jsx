import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Search, Bell, PersonCircle } from "react-bootstrap-icons";

class Header extends Component {
  state = {
    showProfile: false,
  };
  render() {
    return (
      <>
        <header className="sticky-top">
          <Navbar expand="lg" className="bg-custom">
            <Container fluid>
              <Navbar.Brand href="#">
                <img src="./assets/images/netflix_logo.png" alt="neflix_logo" width="100px" className="navImg" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home" className="text-light">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#" className="text-light">
                    Tv Show
                  </Nav.Link>
                  <Nav.Link href="#" className="text-light">
                    Movies
                  </Nav.Link>
                  <Nav.Link href="#" className="text-light">
                    Recently Added
                  </Nav.Link>
                  <Nav.Link href="#" className="text-light">
                    My list
                  </Nav.Link>
                </Nav>
                <Nav>
                  <div className="d-flex text-light">
                    <button className="bg-custom text-light border border-0">
                      <Search />
                    </button>
                    <p className="text-light fw-bold my-0 mx-1 align-self-center">KIDS</p>
                    <button className="bg-custom text-light border border-0 ">
                      <Bell />
                    </button>
                    <img
                      src="./assets/images/avatar.png"
                      alt="profile_avatar"
                      width="30px"
                      height="30px"
                      className="right-icons"
                    />
                    <button className="bg-custom text-light border border-0 ">
                      <PersonCircle className="fs-4" />
                    </button>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default Header;

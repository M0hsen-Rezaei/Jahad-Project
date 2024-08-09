import React from 'react'
import logo from './assest/img/images.jpg'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket,faUser,faSun } from '@fortawesome/free-solid-svg-icons'


export default function Menu() {
    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand className='navbar-brand' href="#home">
                    <img src={logo} alt="" />
                    <a href="#">جهاد دانشگاهی</a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="">
                        <Nav.Link className='nav-link' href="#home">خانه</Nav.Link>
                        <NavDropdown title="درباره ما" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">اول</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">دوم</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">سوم</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="گروه های آموزشی" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">اول</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">دوم</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">سوم</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="مقالات" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">اول</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">دوم</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">سوم</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="دانلود نرم افزار" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">اول</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">دوم</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">سوم</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='nav-link' href="#home">سوالات متداول</Nav.Link>
                        <Nav.Link className='nav-link' href="#home">ورود/ثبت نام</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div class="icons">
                    <a class="icon" href=""><FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon></a>
                    <a class="icon" href=""><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></a>
                    <a class="icon" href=""><FontAwesomeIcon icon={faSun}></FontAwesomeIcon></a>
                    <a class="icon" href=""><FontAwesomeIcon icon={faSun}></FontAwesomeIcon></a>
                    <a class="icon" href=""><FontAwesomeIcon icon={faSun}></FontAwesomeIcon></a>
                </div>
            </Container>
        </Navbar>
    )
}

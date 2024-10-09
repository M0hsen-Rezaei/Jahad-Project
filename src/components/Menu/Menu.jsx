import React, { useState, useContext, useEffect } from 'react'
import logo from '../assest/img/images.jpg'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Modal, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"

import { AccountCircle, ShoppingCart } from '@mui/icons-material';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { BuyCources } from '../../Contexts/BuyContext';



export default function Menu() {
    const [showModal, setShowModal] = useState(false)
    const Buy = useContext(BuyCources)

    useEffect(() => {
        console.log(Buy.items);

    }, [Buy])

    return (
        <>
            <Navbar expand="lg" className="navbar">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand className='navbar-brand' href="#home">
                        <img src={logo} alt="" />
                        <a href="#">جهاد دانشگاهی</a>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                            <Nav.Link className='nav-link' as={Link} to={'/'}>خانه</Nav.Link>
                            <NavDropdown title="گروه های آموزشی" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to={'/cources/programing'}>
                                    دوره های برنامه نویسی
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'/cources/digital'}>
                                    طراحی وب و دیجیتال مارکتینگ
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'/cources/network'}>
                                    سخت افزار-شبکه-امنیت
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'/cources/ing'}>
                                    نرم افزار های نقشه کشی و معماری
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'/cources/mec'}>
                                    نرم افزار های مهندسی مکانیک
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="درباره ما" id="basic-nav-dropdown">
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
                    <div className="icons">
                        <a className="icon" id='icon-user' href=""><AccountCircle></AccountCircle></a>
                        <a onClick={() => { setShowModal(true) }} className="icon" id='icon-shopp'><ShoppingCart></ShoppingCart></a>
                        <a className="icon" id='icon-telegram' href=""><TelegramIcon></TelegramIcon></a>
                        <a className="icon" id='icon-instagram' href=""><InstagramIcon></InstagramIcon></a>
                        <a className="icon" id='icon-whatsapp' href=""><WhatsAppIcon></WhatsAppIcon></a>
                    </div>
                </Container>
            </Navbar >
            <Modal show={showModal} onHide={() => { setShowModal(false) }}>
                <Modal.Dialog>
                    <Modal.Header className='flex-row-reverse justify-content-between' closeButton>
                        <Modal.Title>سبد خرید</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {Buy.items.length == 0 && <p>محصولی برای نمایش وجود ندارد</p>}
                        <ul className='CourceBuyList'>
                            {Buy.items.map((item) => {
                                return (<li className='CourceBuyItem'>
                                    <img src={item.img} alt="" />
                                    <p>{item.name}</p>
                                    <div>{item.price}</div>
                                    <Button onClick={() => { Buy.deleteFromBuyList(item.id) }} variant='danger'>حذف از سبد خرید</Button>
                                </li>)
                            })}
                        </ul>
                    </Modal.Body>
                </Modal.Dialog>
                <Modal.Footer className="m-auto">
                    <Button variant='primary'>ادامه فرایند خرید</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

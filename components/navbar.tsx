'use client';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
    const [activeMenu, setActiveMenu] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'work', 'service', 'contact'];
            const scrollY = window.scrollY;

            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const offset = section.offsetTop - 150;
                    const height = section.offsetHeight;

                    if (scrollY >= offset && scrollY < offset + height) {
                        setActiveMenu(id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Silakan lihat daftar hidangan unggulan kami pada bagian Menu Spesial di bawah.');
    };

    return (
        <Navbar expand="lg" fixed="top" className="bg-body-tertiary shadow-sm py-3">
            <Container fluid className="px-lg-5">
                <Navbar.Brand href="#home" className="fw-bold fs-4 brand-logo">
                    Dapur<span>McH</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '150px' }}
                        navbarScroll
                    >
                        <Nav.Link
                            href="#home"
                            active={activeMenu === 'home'}
                        >
                            Beranda
                        </Nav.Link>
                        <Nav.Link
                            href="#about"
                            active={activeMenu === 'about'}
                        >
                            Kisah Kami
                        </Nav.Link>
                        <NavDropdown
                            title="Koleksi Menu"
                            id="navbarScrollingDropDown"
                            active={activeMenu === 'work'}
                        >
                            <NavDropdown.Item href="#work">
                                Hidangan Utama
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#work">
                                Sajian Mie & Kuah
                            </NavDropdown.Item>
                            <NavDropdown.Divider></NavDropdown.Divider>
                            <NavDropdown.Item href="#service">
                                Paket Katering & Acara
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link
                            href="#service"
                            active={activeMenu === 'service'}
                        >
                            Layanan
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            active={activeMenu === 'contact'}
                        >
                            Reservasi
                        </Nav.Link>
                        <Nav.Link href="#" disabled>
                            Member VIP
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={handleSearch}>
                        <Form.Control
                            type="search"
                            placeholder="Cari hidangan nusantara..."
                            className="me-2"
                            aria-label="Search"
                            suppressHydrationWarning
                        ></Form.Control>
                        <Button variant="outline-danger" type="submit" suppressHydrationWarning>
                            Cari
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
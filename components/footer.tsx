"use client";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    const handleFooterSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Gunakan navigasi halaman untuk menuju ke informasi yang Anda cari.');
    };

    return (
        <footer id="footer" className="pt-md-5 pb-md-3 py-4 bg-light">
            <Container>
                <Row>
                    <Col md={3} className="mb-3">
                        <h3 className="fs-5 fw-bold mb-3">Menu Unggulan</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#work">Nasi Panggang Daging Asap</a></li>
                            <li className="mb-2"><a href="#work">Mie Kaldu Udang Pesisir</a></li>
                            <li className="mb-2"><a href="#work">Iga Bakar Madu Hutan</a></li>
                            <li className="mb-2"><a href="#service">Paket Tumpeng & Kotakan</a></li>
                            <li className="mb-2"><a href="#service">Kopi & Wedang Tradisional</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="mb-3">
                        <h3 className="fs-5 fw-bold mb-3">Navigasi Halaman</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#home">Beranda Utama</a></li>
                            <li className="mb-2"><a href="#about">Kisah Dapur Kami</a></li>
                            <li className="mb-2"><a href="#work">Daftar Menu Spesial</a></li>
                            <li className="mb-2"><a href="#service">Layanan & Fasilitas</a></li>
                            <li className="mb-2"><a href="#contact">Formulir Reservasi</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="mb-3">
                        <h3 className="fs-5 fw-bold mb-3">Informasi Resmi</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#about">Sertifikasi Halal & Higienis</a></li>
                            <li className="mb-2"><a href="#contact">Ketentuan Pemesanan Katering</a></li>
                            <li className="mb-2"><a href="mailto:halo@dapurMcH.id">Layanan Pelanggan (Email)</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="mb-3">
                        <h3 className="fs-5 fw-bold mb-3">Cari Informasi</h3>
                        <Form className="mb-4" onSubmit={handleFooterSearch}>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Ketik menu atau info..."
                                    suppressHydrationWarning
                                />
                                <Button variant="danger" type="submit" suppressHydrationWarning>
                                    Cari
                                </Button>
                            </InputGroup>
                        </Form>
                        <h3 className="fs-5 fw-bold mb-3">Ikuti Media Sosial Kami</h3>
                        <ul className="list-unstyled d-flex gap-2 social-list">
                            <li><a href="https://facebook.com" target="_blank"><i className="bi bi-facebook fs-5"></i></a></li>
                            <li><a href="https://twitter.com" target="_blank"><i className="bi bi-twitter fs-5"></i></a></li>
                            <li><a href="https://instagram.com" target="_blank"><i className="bi bi-instagram fs-5"></i></a></li>
                            <li><a href="https://youtube.com" target="_blank"><i className="bi bi-youtube fs-5"></i></a></li>
                            <li><a href="https://pinterest.com" target="_blank"><i className="bi bi-pinterest fs-5"></i></a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={12} className="text-center">
                        <hr />
                        <p className="mb-0 text-muted">
                            All rights reserved by <b>Michael Respati Sanjaya Ho</b> &bull; Dapur McH
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
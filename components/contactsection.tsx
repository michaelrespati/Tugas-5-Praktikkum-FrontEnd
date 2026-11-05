"use client";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function ContactSection() {
    const handleReservationSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Terima kasih! Permintaan reservasi Anda di Dapur McH telah kami terima.');
    };

    return (
        <Container className="my-5 py-5">
            <Row className="my-3 py-3 justify-content-center">
                <Col md={10} className="mb-3">
                    <Card className="text-center p-4 contact-card">
                        <span className="badge bg-warning text-dark mx-auto mb-2 px-3 py-2">Layanan Reservasi & Katering</span>
                        <h2 className="fw-bold">Hubungi Dapur McH</h2>
                        <p className="text-muted">
                            Ingin memesan meja untuk makan malam keluarga, mendiskusikan menu katering, atau menyampaikan masukan? Tim kami siap membantu Anda.
                        </p>
                        <Form className="mt-2 p-4 text-start contact-form" onSubmit={handleReservationSubmit}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label className="fw-bold">Nama Lengkap</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Masukkan nama lengkap Anda"
                                    required
                                    suppressHydrationWarning
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label className="fw-bold">Alamat Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Masukkan alamat email aktif Anda"
                                    required
                                    suppressHydrationWarning
                                />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formMessage">
                                <Form.Label className="fw-bold">Detail Reservasi / Pesan Anda</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    placeholder="Tuliskan tanggal kedatangan, jumlah kursi, atau detail pesanan katering yang Anda butuhkan..."
                                    required
                                    suppressHydrationWarning
                                />
                            </Form.Group>
                            <Button variant="danger" type="submit" className="px-4 py-2 fw-bold" suppressHydrationWarning>
                                Kirim Permintaan Reservasi
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactSection;
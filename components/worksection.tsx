"use client";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

function WorkSection() {
    return (
        <Container className="py-5">
            <Row className="mb-4">
                <Col md={12} className="text-center text-white">
                    <span className="badge bg-warning text-dark mb-2 px-3 py-2">Rekomendasi Juru Masak</span>
                    <h2 className="fw-bold">Menu Spesial Dapur McH</h2>
                    <p className="text-light">
                        Tiga sajian favorit pelanggan yang dimasak perlahan menggunakan bumbu rempah autentik warisan leluhur.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="mb-4">
                    <Card className="work-card">
                        <Card.Img variant="top" src="/images/image-44.jpg" alt="Nasi Panggang Daging Asap" />
                        <Card.Body className="d-flex flex-column">
                            <div>
                                <span className="badge bg-danger mb-2">Paling Laris &bull; Rp 45.000</span>
                            </div>
                            <Card.Title className="fw-bold">
                                Nasi Panggang Daging Asap & Sambal Matah
                            </Card.Title>
                            <Card.Text className="text-muted mb-4">
                                Nasi hangat berbumbu serai dan daun jeruk yang disajikan bersama irisan daging sapi asap empuk, lalapan segar, serta sambal matah khas Bali.
                            </Card.Text>
                            <div className="mt-auto">
                                <Button variant="danger" href="#contact" suppressHydrationWarning>
                                    Pesan Menu Ini
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="work-card">
                        <Card.Img variant="top" src="/images/image-46.jpg" alt="Mie Spesial Kuah Kaldu Udang" />
                        <Card.Body className="d-flex flex-column">
                            <div>
                                <span className="badge bg-success mb-2">Favorit Keluarga &bull; Rp 38.000</span>
                            </div>
                            <Card.Title className="fw-bold">
                                Mie Spesial Kuah Kaldu Udang Pesisir
                            </Card.Title>
                            <Card.Text className="text-muted mb-4">
                                Mie lembut racikan sendiri yang disiram kuah kaldu udang kental nan gurih, dilengkapi udang rebus segar, kecambah, dan renyahnya emping melinjo.
                            </Card.Text>
                            <div className="mt-auto">
                                <Button variant="danger" href="#contact" suppressHydrationWarning>
                                    Pesan Menu Ini
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="work-card">
                        <Card.Img variant="top" src="/images/image-45.jpg" alt="Iga Sapi Bakar Madu" />
                        <Card.Body className="d-flex flex-column">
                            <div>
                                <span className="badge bg-warning text-dark mb-2">Spesial Panggang &bull; Rp 62.000</span>
                            </div>
                            <Card.Title className="fw-bold">
                                Iga Sapi Bakar Madu Lada Hitam
                            </Card.Title>
                            <Card.Text className="text-muted mb-4">
                                Potongan iga sapi pilihan yang direbus bersama rempah hingga lembut, kemudian dibakar dengan olesan madu hutan murni dan lada hitam hangat.
                            </Card.Text>
                            <div className="mt-auto">
                                <Button variant="danger" href="#contact" suppressHydrationWarning>
                                    Pesan Menu Ini
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default WorkSection;
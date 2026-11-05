"use client";
import { Container, Row, Col, Image } from 'react-bootstrap';

function ServiceSection() {
    return (
        <Container className="my-5 py-4">
            <Row className="mb-4">
                <Col md={12} className="text-center">
                    <span className="badge bg-danger mb-2 px-3 py-2">Layanan Pelanggan</span>
                    <h2 className="fw-bold">Pengalaman Bersantap Terbaik</h2>
                    <p className="text-muted">
                        Lebih dari sekadar menyajikan makanan lezat, kami memastikan setiap momen bersantap Anda terasa istimewa.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="mb-4 text-center">
                    <div className="service-box">
                        <Image src="/images/about-icon1.png" alt="Service 1" fluid />
                        <span className="badge bg-warning text-dark d-block w-50 mx-auto mb-2">Minuman Khas</span>
                        <h3 className="fs-4 fw-bold mt-2">Seduhan Kopi & Wedang</h3>
                        <p className="text-muted mb-0">
                            Menyajikan aneka kopi tubruk nusantara, teh saring wangi melati, hingga wedang uwuh hangat sebagai teman bersantai.
                        </p>
                    </div>
                </Col>
                <Col md={4} className="mb-4 text-center">
                    <div className="service-box">
                        <Image src="/images/about-icon2.png" alt="Service 2" fluid />
                        <span className="badge bg-danger d-block w-50 mx-auto mb-2">Pengiriman Cepat</span>
                        <h3 className="fs-4 fw-bold mt-2">Antar Cepat & Higienis</h3>
                        <p className="text-muted mb-0">
                            Setiap pesanan dikemas rapat menggunakan wadah ramah lingkungan penahan panas agar tiba di meja Anda dalam keadaan segar.
                        </p>
                    </div>
                </Col>
                <Col md={4} className="mb-4 text-center">
                    <div className="service-box">
                        <Image src="/images/about-icon3.png" alt="Service 3" fluid />
                        <span className="badge bg-success d-block w-50 mx-auto mb-2">Acara Spesial</span>
                        <h3 className="fs-4 fw-bold mt-2">Katering & Jamuan Acara</h3>
                        <p className="text-muted mb-0">
                            Siap melayani pemesanan tumpeng, nasi kotak rapat kantor, hingga jamuan prasmanan untuk acara syukuran keluarga Anda.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ServiceSection;
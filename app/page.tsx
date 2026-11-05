"use client";
import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";

import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <Container className="my-5 py-4" id="about">
          <Row className="my-4 align-items-center">
            <Col md={6} className="align-self-center mb-4">
              <span className="badge bg-danger mb-2 px-3 py-2">Kisah Dapur Kami</span>
              <h2 className="fw-bold">Menjaga Keaslian Rasa Sejak 2018</h2>
              <h6 className="text-danger mb-3">Mengapa Pelanggan Memilih Hidangan Dapur McH?</h6>
              <p>
                Berawal dari kecintaan terhadap kekayaan kuliner tanah air, <b>Dapur McH</b> hadir untuk menyajikan kembali resep-resep tradisional yang diolah dari rempah segar pilihan. Kami bekerja sama langsung dengan petani dan nelayan lokal untuk memastikan setiap bahan baku yang masuk ke dapur kami selalu berada dalam kondisi terbaik.
              </p>
              <ul className="about-list mb-4">
                <li>Racikan bumbu rempah asli tanpa tambahan pengawet buatan.</li>
                <li>Proses memasak yang higienis, tersertifikasi halal, dan diawasi juru masak berpengalaman.</li>
                <li>Porsi hangat yang pas untuk santap siang personal maupun jamuan keluarga besar.</li>
              </ul>
              <Button variant="danger" href="#work" className="px-4 py-2" suppressHydrationWarning>
                Jelajahi Menu Kami
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <p>
                <Image src="/images/about.jpg" alt="About Us" width={500} height={420} className="about-image" />
              </p>
            </Col>
          </Row>
        </Container>
        <section className="bg-dark" id="work">
          <WorkSection />
        </section>
        <section id="service">
          <ServiceSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />
      </main>
    </div>
  );
}
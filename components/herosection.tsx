"use client";
import Carousel from 'react-bootstrap/Carousel';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "Warisan Kuliner Asli Nusantara",
            subtitle: "Menghadirkan kehangatan masakan tradisional Indonesia dengan racikan rempah segar pilihan di setiap sajian.",
            imageUrl: "/images/banner_01.jpg",
        },
        {
            title: "Kelezatan Mie & Kaldu Rempah",
            subtitle: "Perpaduan mie kenyal buatan dapur sendiri dengan siraman kuah kaldu udang pesisir yang gurih dan kaya rasa.",
            imageUrl: "/images/banner_02.jpg",
        },
        {
            title: "Racikan Bahan Segar Terbaik",
            subtitle: "Diolah langsung dari hasil bumi petani lokal tanpa pengawet demi menjaga cita rasa dan kualitas hidangan keluarga.",
            imageUrl: "/images/banner_03.jpg",
        }
    ];

    return (
        <Carousel fade interval={4000} data-bs-theme="dark" id="home">
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div
                        style={{
                            backgroundImage: `url(${slide.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "65vh",
                        }}>
                    </div>
                    <Carousel.Caption className="hero-caption">
                        <span className="badge bg-warning text-dark mb-2 px-3 py-2">Dapur McH Authentic</span>
                        <h1 className="display-4 fw-bold dropShadow">{slide.title}</h1>
                        <p className="lead dropShadow mb-0">{slide.subtitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default HeroSection;
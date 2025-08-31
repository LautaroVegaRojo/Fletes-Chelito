import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web";
import "./AnimatedCustomNavbar.css";
import ChelitoWordmark from "./ChelitoWordmark";

const AnimatedCustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fondo y blur animado
  const navbarBackgroundProps = useSpring({
    backgroundColor: isMenuOpen
      ? "rgba(33, 37, 41, 0.95)"
      : "rgba(33, 37, 41, 0.4)",
    backdropFilter: isMenuOpen ? "blur(8px)" : "blur(4px)",
    config: { duration: 300 },
  });

  // Animación de altura
  const navbarHeightProps = useSpring({
    height: "7vh",
    config: { duration: 300 },
  });

  // Animación del toggle
  const toggleAnimation = useSpring({
    transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
    config: { duration: 200 },
  });

  // Links del menú
  const menuLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <animated.nav
      style={{ ...navbarBackgroundProps, ...navbarHeightProps }}
      className="animated-navbar fixed-top"
    >
      <Navbar expand="lg" variant="dark" className="h-100">
        <Container fluid className="h-100 px-lg-5 d-flex align-items-center">
          {/* Logo + Marca */}
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center gap-2"
          >
            {/* Si querés mantener el ISO a la izquierda, dejá el <img>. Si no, removelo */}
            <img
              src="/ChelitoISO.svg"
              width="80"
              height="80"
              alt=""
              className="me-1 d-none d-md-inline"
            />
            <ChelitoWordmark variant="playful" />
          </Navbar.Brand>

          {/* Ubicación en desktop */}

          {/* Toggle */}
          <animated.div style={toggleAnimation}>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </animated.div>

          {/* Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto custom-nav-links">
              {menuLinks.map((link, index) => (
                <Nav.Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="mx-3"
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </animated.nav>
  );
};

export default AnimatedCustomNavbar;

// En tu archivo App.tsx o un nuevo componente como MainContent.tsx
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
// Importa tus iconos si los tienes
// import { FaTruck, FaMoneyBillWave, FaMapMarkedAlt } from 'react-icons/fa';

const MainContent = () => {
  // Lista de beneficios para renderizar dinámicamente
  const beneficios = [
    { 
      titulo: 'Versatilidad de Carga', 
      texto: 'Los mini fletes son ideales para transportar desde muebles y electrodomésticos hasta cajas y paquetes más grandes.',
      // icono: <FaTruck /> 
    },
    { 
      titulo: 'Eficiencia en Espacio y Costo', 
      texto: 'En comparación con alquilar un camión completo, los mini fletes te permiten pagar solo por el espacio que realmente necesitas.',
      // icono: <FaMoneyBillWave />
    },
    { 
      titulo: 'Agilidad en la Ciudad', 
      texto: 'En la congestionada Ciudad de Buenos Aires, los mini fletes son una opción más ágil para maniobrar y llegar a lugares de difícil acceso.',
      // icono: <FaMapMarkedAlt />
    },
    { 
      titulo: 'Entregas Programadas', 
      texto: 'Los mini fletes pueden programarse según tus horarios y necesidades, brindándote mayor control sobre el momento de tu traslado o entrega.'
    },
    { 
      titulo: 'Atención Personalizada', 
      texto: 'Muchos conductores de mini fletes ofrecen una atención más cercana y cuidadosa. Asegurándose de que tus pertenencias sean tratadas con el mayor cuidado posible.'
    },
  ];

  return (
    <>
       <div className="container mt-5">
      <h2 className="text-center fw-bold" style={{ color: '#2F4F4F' }}>¿Qué es un Mini Flete?</h2>
      <p className="text-center mb-5" style={{ color: '#2F4F4F' }}>
        Un mini flete es un servicio de transporte de mercancías...
      </p>
      
      <Container>
        <Row className="g-4">
          {beneficios.map((beneficio, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 shadow-sm p-3" style={{ backgroundColor: '#2d3d41ff' }}>
                <Card.Body>
                  {/* Título de la tarjeta con el color principal */}
                  <Card.Title className="fw-bold" style={{ color: '#66CDAA' }}>{beneficio.titulo}</Card.Title>
                  <Card.Text style={{ color: '#d7cfc3ff' }}>{beneficio.texto}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>

    {/* Sección de Llamado a la Acción (CTA) */}
    <div className="text-center my-5 py-5" style={{ backgroundColor: '#E5734A' }}>
      <h3 className="fw-bold mb-3" style={{ color: '#FFFFFF' }}>¿Listo para coordinar tu flete?</h3>
      <p className="lead mb-4" style={{ color: '#FFFFFF' }}>
        Contáctanos ahora y obtén una cotización personalizada.
      </p>
      {/* Botón de Contacto con un color que contraste */}
      <Button variant="primary" size="lg" href="#contacto">
        ¡Quiero mi Cotización!
      </Button>
    </div>
    </>
  );
};

export default MainContent;
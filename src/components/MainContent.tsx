// MainContent.jsx
import { Container, Card, Carousel, Row, Col } from 'react-bootstrap';
// No necesitas Row y Col si usas Carousel

const MainContent = () => {
  // Lista de beneficios para renderizar dinámicamente
  const beneficios = [
    { 
      titulo: 'Versatilidad de Carga', 
      texto: 'Los mini fletes son ideales para transportar desde muebles y electrodomésticos hasta cajas y paquetes más grandes.',
    },
    { 
      titulo: 'Eficiencia en Espacio y Costo', 
      texto: 'En comparación con alquilar un camión completo, los mini fletes te permiten pagar solo por el espacio que realmente necesitas.',
    },
    { 
      titulo: 'Agilidad en la Ciudad', 
      texto: 'En la congestionada Ciudad de Buenos Aires, los mini fletes son una opción más ágil para maniobrar y llegar a lugares de difícil acceso.',
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
 const chunkSize = 3;
    const cardGroups = [];
    for (let i = 0; i < beneficios.length; i += chunkSize) {
      cardGroups.push(beneficios.slice(i, i + chunkSize));
    }
  
    return (
      <>
        {/* Aquí se eliminó la clase "container" del div principal */}
        <div className="mt-5">
          <h2 className="text-center fw-bold" style={{ color: '#2F4F4F' }}>¿Qué es un Mini Flete?</h2>
          <p className="text-center mb-5" style={{ color: '#2F4F4F' }}>
            Un mini flete es un servicio de transporte de mercancías...
          </p>
          
          <Container fluid>
            <Carousel>
              {cardGroups.map((group, groupIndex) => (
                <Carousel.Item key={groupIndex}>
                  <Row className="g-4 justify-content-center">
                    {group.map((beneficio, cardIndex) => (
                      <Col md={6} lg={4} key={cardIndex}>
                        <Card className="h-100 shadow-sm p-3" style={{ backgroundColor: '#2d3d41ff' }}>
                          <Card.Body>
                            <Card.Title className="fw-bold" style={{ color: '#66CDAA' }}>{beneficio.titulo}</Card.Title>
                            <Card.Text style={{ color: '#d7cfc3ff' }}>{beneficio.texto}</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        </div>
  
        <div className="text-center my-5 py-5" style={{ backgroundColor: '#E5734A' }}>
          {/* ... tu botón de cotización ... */}
        </div>
        <footer className="d-flex justify-content-center py-3">
          {/* ... tu botón de página ... */}
        </footer>
      </>
    );
  };
  
export default MainContent;
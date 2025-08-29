import { Carousel } from 'react-bootstrap';

const images = [
  'https://www.telefonica.com/en/wp-content/uploads/sites/5/2023/09/10-Tips-to-improve-your-photos-e1696506323825.jpg?w=1200',
  'https://thelenslounge.com/wp-content/uploads/2024/07/posing-women-in-photos.jpg',
  'https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg',
];

const MyCarousel = () => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
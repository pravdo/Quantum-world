import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './Header';
import Search from './Search';
import ImageCard from './ImageCard';
import WelcomeImages from './WelcomeImages/WelcomeImages';
import { Col, Container, Row } from 'react-bootstrap';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050';

const ImagesGallery = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_URL}/new-image?query=${word}`)
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      {/* <Header title="Quantum World" /> */}
      <Search
        word={word}
        setWord={setWord}
        handleSearchSubmit={handleSearchSubmit}
      />
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <WelcomeImages />
        )}
      </Container>
    </div>
  );
};

export default ImagesGallery;

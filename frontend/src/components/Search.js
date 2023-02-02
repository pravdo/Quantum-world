import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Search = () => {
  return (
    <Container className="mt-2">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form>
            <Row>
              <Col xs={9}>
                <Form.Control
                  type="email"
                  placeholder="Search for new image..."
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;

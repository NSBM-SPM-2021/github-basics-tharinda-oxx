import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col className="align_center align_textCenter">
          <h1>Employee Registration System</h1>
        </Col>
      </Row>
      <Row>
        <Col lg="8" className="align_center">
          <Card style={{ width: '100%' }}>
            <Form>
              <Card.Body>
                <Card.Title>Add Employee Details</Card.Title>
                <Card.Text>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter full name" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name with Initials</Form.Label>
                        <Form.Control type="namewi" placeholder="Enter name with initials" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row> {/*End Row*/}
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Birth Day</Form.Label>
                        <Form.Control type="bday" placeholder="Enter birth day" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="age" placeholder="Enter age" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="address" placeholder="Enter address" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="city" placeholder="Enter city" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row> {/*End Row*/}
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Telephone No</Form.Label>
                        <Form.Control type="tel" placeholder="Enter Telephone No" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row> {/*End Row*/}
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Department</Form.Label>
                        <Form.Control type="Dep" placeholder="Enter Department" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Job Roll</Form.Label>
                        <Form.Control type="job" placeholder="Enter job roll" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row> {/*End Row*/}
                </Card.Text>
                <div className="align_buttonCenter">
                  <Button variant="primary">Register Employee</Button>
                  <Button variant="danger">Cancel</Button>
                </div>
              </Card.Body>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>

  );
}

export default App;

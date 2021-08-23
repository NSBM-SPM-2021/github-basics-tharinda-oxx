
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Axios from 'axios';
function App() {
   
    const [name,setName] = useState("");
    const [namewi,setNamewi] = useState("");
    const [bday,setBday] = useState("");
    const [age,setAge] = useState("");
    const [address,setAddress] = useState("");
    const [city,setCity] = useState("");
    const [tel,setTel] = useState("");
    const [email,setEmail] = useState("");
    const [Dep,setDep] = useState("");
    const [job,setJob] = useState("");

    const submitReview =() =>{
      Axios.post("http://localhost:3002/api/insert",{
        full_name:name ,
        name_with_in:namewi ,
        birth_day:bday ,
        age:age ,
        address:address ,
        city:city , 
        telephone_no:tel ,
        email:email ,
        department:Dep ,
        job_roll:job,
      });
        alert("Successful Insert");
      
    };
  return (
    <Container>
      <Row>
        <Col className="align_center align_textCenter title-shadow">
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
                        <Form.Control type ="text" name="name" placeholder="Enter full name" onChange={(e)=>{
                          setName(e.target.value)
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name with Initials</Form.Label>
                        <Form.Control type="text" name="namewi" placeholder="Enter name with initials" onChange={(e)=>{
                          setNamewi(e.target.value)
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row> {/*End Row*/}
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Birth Day</Form.Label>
                        <Form.Control type="date" name="bday" placeholder="Enter birth day" onChange={(e)=>{
                          setBday(e.target.value)
                        }} />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" name="age" placeholder="Enter age" onChange={(e)=>{
                          setAge(e.target.value)
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" placeholder="Enter address" onChange={(e)=>{
                          setAddress(e.target.value)
                        }}/>
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" name="city" placeholder="Enter city" onChange={(e)=>{
                          setCity(e.target.value)
                        }}/>
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row> {/*End Row*/}
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Telephone No</Form.Label>
                        <Form.Control type="text" name="tel" placeholder="Enter Telephone No" onChange={(e)=>{
                          setTel(e.target.value)
                        }}/>
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="email" placeholder="Enter Email" onChange={(e)=>{
                          setEmail(e.target.value)
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row> {/*End Row*/}
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Department</Form.Label>
                        <Form.Control type="text" name="Dep" placeholder="Enter Department" onChange={(e)=>{
                          setDep(e.target.value)
                        }}/>
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Job Roll</Form.Label>
                        <Form.Control type="text" name="job" placeholder="Enter job roll" onChange={(e)=>{
                          setJob(e.target.value)
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row> {/*End Row*/}
                </Card.Text>
                <div className="align_buttonCenter">
                  <Button onClick={submitReview} className="button-size" variant="primary">Register</Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Button  type="reset" className="button-size" variant="danger">Cancel</Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Button className="button-size" variant="secondary">View</Button>
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

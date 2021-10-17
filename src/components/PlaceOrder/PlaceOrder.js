import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import order from '../../images/order.png'

const PlaceOrder = () => {
    return (
        <div>
            <Container> 
                    <Row className="align-items-center my-5"> 
                        <Col md={6}> 
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7276.590568562585!2d89.287109!3d24.231449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x408e16348bd1d77b!2sChatmohar%20Thana!5e0!3m2!1sen!2sbd!4v1633315022801!5m2!1sen!2sbd" title="contact map" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>
                        </Col>
                        <Col md={6}> 
                            <img className="img-fluid" src={order} alt="" />
                        </Col>
                    </Row>
                    <Row className="align-items-center my-5"> 
                        <Col md={6}> 
                        </Col>
                        <Col md={6}>
                            <Link to="/"><Button variant="danger" size="lg">
                            Place Order
                            </Button></Link>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
};

export default PlaceOrder;
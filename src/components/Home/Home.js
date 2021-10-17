import React from 'react';
import { FormControl, InputGroup, Button, Tab, Row, Col, Nav, Container } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';

const Home = () => {
    return (
        <div>
            <div className="banner-section">
            <div className="py-5 w-50 mx-auto text-center"> 
                <h1 className="mt-5">Best Food waiting for your belly</h1>
                <InputGroup className="mt-5 mb-3 w-50 mx-auto">
                
                    <FormControl
                    placeholder="Search Food Item"
                    className="rounded-pill"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button style={{position: 'relative', left: '-25px', zIndex: '999'}} className="rounded-pill" variant="danger" id="button-addon2">
                    Search
                    </Button>
                </InputGroup>
            </div>
            </div>
            
            <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="justify-content-center my-5">
                <Col md="auto">
                <Nav className="flex-row food-menu">
                    <Nav.Item>
                    <Nav.Link eventKey="first">Breakfast</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">Lunch</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">Dinner</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                </Row>
                <Row>
                <Col md={12}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Breakfast />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Lunch />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Dinner />
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
            </Container>

            <Blog></Blog>

        </div>
    );
};

export default Home;
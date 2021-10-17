import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Breakfast = () => {

    const [breakfasts, setBreakfasts] = useState([]);
    useEffect(() => {
        fetch('breakfast.json')
        .then(res => res.json())
        .then(data => setBreakfasts(data))
    }, []);
    return (
        <Row xs={1} md={3} className="g-5">
                {
                    breakfasts.map(breakfast =>  (
                    
                        <Col>
                        <Link to={`breakfast/${breakfast?.id}`}><Card className="border-0 p-4 text-center food-card">
                            <Card.Img variant="top" src={breakfast?.thumbnail}/>
                            <Card.Body>
                            <Card.Title>{breakfast?.title}</Card.Title>
                            <Card.Text>
                                {breakfast?.desc.substring(0, 40)}
                            </Card.Text>
                                <h3>{breakfast?.price}</h3>
                            </Card.Body>
                        </Card></Link>
                        </Col>
                        
                        ) )
                }
                
           
            </Row>
    );
};

export default Breakfast;
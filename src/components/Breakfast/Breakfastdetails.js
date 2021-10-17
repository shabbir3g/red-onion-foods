import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Breakfastdetails = () => {
    const {fastId} = useParams();

    const [breakDetails, setBreakfastDetails] = useState([]);

   

    const [singleBreakFast, setSingleBreakFast] = useState({});

    useEffect(() => {
        fetch('/breakfast.json')
        .then(res => res.json())
        .then(data => setBreakfastDetails(data))
    }, []);

    //console.log(breakDetails[0]?.id);
    useEffect(() => {
        const matchFood = breakDetails.find( food =>  parseInt(food?.id) === parseInt(fastId) )

        setSingleBreakFast(matchFood);
    }, [breakDetails]);


    console.log();
    

    
    return (
        <div>
            <Container> 
                    <Row className="align-items-center my-5"> 
                        <Col md={6}> 
                            <h1>{singleBreakFast?.title}</h1>
                            <p>{singleBreakFast?.desc}</p>
                            <h3>{singleBreakFast?.price}</h3>
                            <Link to="/checkout"><Button variant="danger" size="lg">Add To Cart</Button></Link>
                        </Col>
                        <Col md={6}> 
                            <img className="img-fluid" src={singleBreakFast?.thumbnail} alt="" />
                        </Col>
                    </Row>
            </Container>
        </div>
    );
};

export default Breakfastdetails;
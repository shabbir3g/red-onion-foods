import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);



    return (
        <Container className="my-5">
            <h2>Why you choose us</h2>
            <p>Barton waited twenty always repair in within we do. An delighted offending <br /> curisity my is dashwoods at. Boy prosperous increasing surrounded.</p>

            <Row xs={1} md={3} className="g-4">
                {
                    blogs.map(blog =>  (
                    
                        <Col>
                        <Card>
                            <Card.Img variant="top" src={blog?.thumbnail}/>
                            <Card.Body>
                            <Card.Title>{blog?.title}</Card.Title>
                            <Card.Text>
                                {blog?.desc.substring(0, 127)}
                            </Card.Text>
                            <Link to="/">See More</Link>
                            </Card.Body>
                        </Card>
                        </Col>
                        
                        ) )
                }
                
           
            </Row>
        </Container>
    );
};

export default Blog;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import footerLogo from '../../images/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer-area"> 
                <Container> 
                    <Row> 
                        <Col xs={12} md={6}>
                            <Link to="/"><img  height="43" src={footerLogo} alt="" /></Link>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row> 
                                <Col xs={12} md={6}>
                                    <ul className="footer-menu"> 
                                        <li><NavLink to="/">About Online Food</NavLink></li>
                                        <li><NavLink to="/">Read our blog</NavLink></li>
                                        <li><NavLink to="/">Sign up to deliver</NavLink></li>
                                        <li><NavLink to="/">Add your restaurant</NavLink></li>
                                    </ul>
                                    
                                </Col>
                                <Col xs={12} md={6}>
                                    <ul className="footer-menu"> 
                                        <li><NavLink to="/">Get help</NavLink></li>
                                        <li><NavLink to="/">Read FAQs</NavLink></li>
                                        <li><NavLink to="/">View all cities</NavLink></li>
                                        <li><NavLink to="/">Restaurants near me</NavLink></li>
                                    </ul>
                                </Col>
                            </Row>
                            
                        </Col>
                    </Row>
                    <Row className="mt-5"> 
                        <Col xs={12} md={8}>
                            <p className="copyright-text">Copyright &copy; 2021 | All right reserved By Online Shop</p>
                        </Col>
                        <Col xs={12} md={4}>
                        <ul className="footer-bottom-menu"> 
                                <li><NavLink to="/">Privacy Policy</NavLink></li>
                                <li><NavLink to="/">Terms of Use</NavLink></li>
                                <li><NavLink to="/">Pricing</NavLink></li>
                            </ul>
                        </Col>
                    </Row> 
                </Container>
            </footer>
        </div>
    );
};

export default Footer;
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './Frontend.css';
import hariharanPortfolio from '../images/hariharan-portfolio.png';





function About() {
    return (
        <Container fluid className='about-container mt-5 mb-5 p-5'>
            <Row>
                <h2>About</h2>
            </Row>
            <Row className='pt-5 pb-5'>
                <Col xs={5}>
                <img src={hariharanPortfolio} alt="Hariharan's Portfolio" />

                </Col>
                <Col xs={7}>
                <h3 className='pb-3'>What I Do?</h3>
                <p>Hello, I'm Hariharan, a web developer with two years of WordPress expertise. 
                    Proficient in HTML, CSS, JavaScript, and PHP, I use design principles and Figma
                 for efficient development.<br></br><br></br> Specializing in technical SEO,
                  I optimize page speed and ensure optimal website functionality. 
                  Passionate about creating visually appealing and high-performing web experiences,
                   let's enhance your online presence together.</p>
                   <Button variant="primary" className='contact-btn mt-2'>Contact Me</Button>
                </Col>
            </Row>

        </Container> 
    )

}

export default About;
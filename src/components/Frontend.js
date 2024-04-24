import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './Frontend.css';


function Frontend() {
    return(
       <Container className='pt-5 pb-5'>
        <Row>
           <p className='mb-0'>I'm a</p>
           <h1 className='mt-o mb-4'>Web Designer & Developer<span className="spn-dot">.</span></h1>
           </Row>
           <Row sm={4}>
           <Button variant="primary" className='contact-btn mx-3'>Contact Me</Button>
        </Row>

       </Container>
    )
}

export default Frontend;
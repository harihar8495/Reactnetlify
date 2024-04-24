import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Frontend.css';

function Skills() {
    return(
        <Container className='pt-5 pb-5'>
            <Row>
                <h2>Skills</h2>
            </Row>
            <Row className='pb-5'>
             <p>WordPress</p>   
            <ProgressBar variant='success'  now={95} />
            </Row>
            <Row className='pb-5'>
             <p>HTML</p>   
            <ProgressBar variant='success'  now={93} />
            </Row>
            <Row className='pb-5'>
             <p>CSS</p>   
            <ProgressBar variant='success'  now={91} />
            </Row>
            <Row className='pb-5'>
             <p>JavaScript</p>   
            <ProgressBar variant='success'  now={80} />
            </Row>
            <Row className='pb-5'>
             <p>PHP</p>   
            <ProgressBar variant='success'  now={70} />
            </Row>
            <Row className='pb-5'>
             <p>Technical SEO</p>   
            <ProgressBar variant='success'  now={85} />
            </Row>
            <Row className='pb-5'>
             <p>Figma</p>   
            <ProgressBar variant='success'  now={70} />
            </Row>
            <Row className='pb-5'>
             <p>Framer</p>   
            <ProgressBar variant='success'  now={70} />
            </Row>
        </Container>
    )
}

export default Skills;
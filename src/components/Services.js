import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Frontend.css';

function Services() {
    return(
        <Container className='pt-5 pb-5'>
            <Row className='mt-5 mb-5'>
                <h2>Services</h2>
            </Row>
            <Row>
                <Col>
                <Card.Body className='card-body p-5'>
        <Card.Title className='card-title pb-3'>Website Development

</Card.Title>
        <Card.Text>
        Crafting websites that work seamlessly, customized for your needs.
        </Card.Text>
      </Card.Body>
                </Col>
                <Col>
                <Card.Body className='card-body p-5'>
        <Card.Title className='card-title pb-3'>Web Design</Card.Title>
        <Card.Text>
        Crafting top-notch websites for a sleek and inviting user journey.
        </Card.Text>
      </Card.Body>
                </Col>
                <Col>
                <Card.Body className='card-body p-5'>
        <Card.Title className='card-title pb-3'>Technical SEO</Card.Title>
        <Card.Text>
        Enhancing website speed, maintenance, and functionality for optimal performance.
        </Card.Text>
      </Card.Body>
                </Col>
            </Row>

        </Container>
    )
}

export default Services;
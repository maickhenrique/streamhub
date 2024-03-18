import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalMenu from './components/VerticalMenu/VeticalMenu';
import Sports from './components/SportList/Sports';
import { Container, Col, Row } from 'react-bootstrap';
import './style.css';

const Home = () => {
  return (
    <div className="page-container">
      <Container fluid>
        <Row>
          <Col xs={3}>
            <VerticalMenu />
          </Col>
          <Col xs={9}>
            <Sports />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

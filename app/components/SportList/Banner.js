import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

const Banner = () => {
    return (
        <Container fluid className="banner-container">
            <Row className="banner-row">
                <Col>
                    <div className="banner-overlay">
                        <h1>Esportes</h1>
                        <p>Descrição do Banner de Esportes</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;

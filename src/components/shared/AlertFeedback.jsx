import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import Alert from 'react-bootstrap/Alert';

function AlertFeedback() {

  const { alert } = useContext(AlertContext);

  return alert !== null && (
    <Container className="pt-3">
      <Row className="justify-content-center align-items-center">
        <Col xs={8} className="mx-auto">
          <Alert variant="dark">
            {alert.message}
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

export default AlertFeedback;
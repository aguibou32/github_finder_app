import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return <Container className="mt-5 mb-5">
    <p className="text-muted text-center">404 - NOT FOUND
      <Link to='/'>
        <Button className="text-center">
          BACK TO HOME
        </Button>
      </Link>
    </p>

  </Container>
}

export default NotFound;
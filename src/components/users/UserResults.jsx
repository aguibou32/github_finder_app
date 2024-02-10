import { useContext } from "react";
import UserItem from "./UserCard";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "../shared/Loading";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {

  const { users, loading } = useContext(GithubContext)

  if (loading) {
    return <Loading />
  }

  return (
    <Container>
      <Row className="mt-2">
        {users.map((user) => (
          <Col key={user.id} className="mb-3">
            <UserItem user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default UserResults;

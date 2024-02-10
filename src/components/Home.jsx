import {Container } from 'react-bootstrap';
import UserResults from './users/UserResults';
import UserSearch from './users/UserSearch';

function Home() {
  return (
    <Container className="mt-5">
      <UserSearch />
      <br />
      <UserResults />
    </Container>
  )
}

export default Home;

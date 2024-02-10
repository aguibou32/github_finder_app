import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserCard({user}) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.avatar_url} />
      <Card.Body>
        <Card.Title>{user.login}</Card.Title>
       
        
        <Link to={`/users/${user.login}`}><a href="">View Profile</a></Link>
      </Card.Body>
    </Card>
  )
}

export default UserCard;

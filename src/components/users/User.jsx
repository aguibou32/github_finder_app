import React, { useContext, useEffect } from "react";
import GithubContext from "../../context/github/GithubContext";
import { Container, Col, Row, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "../shared/Loading";
import { getUserAndRepos } from "../../context/github/GithubActions";
function User() {
  const { dispatch, repos, user, loading } = useContext(GithubContext);
  const { login } = useParams();

  useEffect(() => {
    
    dispatch({type: 'SET_LOADING'})

    const getUserData = async () => {

      const userData = await getUserAndRepos(login);
      dispatch({type: 'GET_USER', payload: userData.user});
      dispatch({type:'GET_REPOS', payload: userData.repos})
    }

    getUserData();
  }, []);

  console.log(repos);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Row className="mt-4">
        <Col md={4}>
          <Image src={user.avatar_url} rounded fluid />
        </Col>
        <Col md={8}>
          <h3>{user.name}</h3>
          <small>{user.bio}</small>
          <ul>
            <li>
              <strong>Username:</strong> {user.login}
            </li>
            {user.email && (
              <li>
                <strong>Email:</strong> {user.email}
              </li>
            )}
            <li>
              <strong>Followers:</strong> {user.followers}
            </li>
            <li>
              <strong>Following:</strong> {user.following}
            </li>
            <li>
              <strong>Repos:</strong> {user.public_repos}
            </li>
            {user.location && (
              <li>
                <strong>Location:</strong> {user.location}
              </li>
            )}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default User;

import { useEffect, useContext, useState } from 'react';
import {Row, Form, Col, Button } from 'react-bootstrap';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import Alert from '../shared/AlertFeedback';
import { searchUsers, fetchUsers } from '../../context/github/GithubActions';

function UserSearch() {

  const [search, setSearch] = useState('');
  const { users, dispatch, clearUsers } = useContext(GithubContext);
  const {setAlert} = useContext(AlertContext);

  useEffect(() => {
    dispatch({type: 'SET_LOADING'});
    const fetchAndSetUsers = async () => {
      const fetchedUsers = await fetchUsers();
      dispatch({ type: 'GET_USERS', payload: fetchedUsers });
    };
  
    fetchAndSetUsers();
  }, []);
  

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (search === '') {
      setAlert('Please enter something!', 'error');
    } else {
      dispatch({type:'SET_LOADING'})
      const users2 = await searchUsers(search);
      dispatch({type:'GET_USERS', payload: users2})
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="">
        <Col xs={10}>
          <Form.Control
            className='rounded-0'
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
          />
        </Col>
        <Col xs={1}>
          <Button type='submit' className='btn btn-transparent'>
            Search
          </Button>
        </Col>
        {
          users.length > 0 && (<Col xs={1}>
            <p onClick={()=>{clearUsers(); dispatch({type:'CLEAR_USERS'})}} className='btn btn-transparent rounded-0'>
              Clear
            </p>
          </Col>)
        }
      </Row>
    </Form>)
}

export default UserSearch;

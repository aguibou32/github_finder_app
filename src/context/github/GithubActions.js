import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;


const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`
  }
})


export const searchUsers = async (login) => {
  const params = new URLSearchParams({ q: login });

  try {
    const response = await github.get(`/search/users?${params}`);
    return response.data;
  } catch (error) {
    console.log('Error searching user: ', error);
  }
}

export const getUser = async (login) => {
  try {
    const response = await github.get(`/users/${login}`);
    return response.data;
  } catch (error) {
    console.log('Error fetch user: ', error)
  }
};

export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([github.get(`/users/${login}`), github.get(`/users/${login}/repos`)]);

  return { user: user.data, repos: repos.data };

}

// Get initial users (testing purposes)
export const fetchUsers = async () => {
  try {
    const response = await github.get('/users');

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('Error fetch all users: ', error);
  }
};
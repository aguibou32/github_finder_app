const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;



export const searchUsers = async (username) => {
  const params = new URLSearchParams({ q: username });

  const response = await fetch(`${GITHUB_URL}/search/users?${params.toString()}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  });
  const userSearchResult = await response.json();
  return userSearchResult.items;

}

export const getUser = async (login) => {

  try {
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });

    if (response.status === 404) {
      window.location = '/notfound';
    } else {
      const userResult = await response.json();
      return userResult;
    }
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};


// https://api.github.com/users/aguibou32/repos
export const getUserRepos = async (login) => {
  try{
    const response = await fetch(`${GITHUB_URL}/users/${login}/repos`,{
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });

    const repos = await response.json();
    return repos;

  }catch(error){
    console.log('Error fetching user: ', error)
  }
}

  // Get initial users (testing purposes)
  export const fetchUsers = async () => {

    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });
    const fetchedUsers = await response.json();
    return fetchedUsers;
   
  };

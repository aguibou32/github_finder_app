import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return <GithubContext.Provider value={{
    dispatch,
    ...state,
    // users: state.users,
    // user: state.user,
    // repos:state.repos,
    // loading: state.loading,
  }}>
    {children}
  </GithubContext.Provider>

}

export default GithubContext
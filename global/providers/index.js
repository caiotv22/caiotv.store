import { createContext, useContext, useState } from 'react';
export const GitHubInfo = createContext();
export const AuthContext = createContext();

export const useGitHubInfo = () => {
  const context = useContext(GitHubInfo);
  return context;
};

export const Providers = ({ children }) => {
  const [gitHubInfo, setGitHubInfo] = useState(null);
  const [gitHubUserInfo, setGitHubUserInfo] = useState(null);
  const [gitHubAuth, setGitHubAuth] = useState(null);
  const [authState, setAuthState] = useState();
  const [userToken, setUserToken] = useState();
  const [userName, setUserName] = useState();
  const isUserAuthenticated = () => authState;

  const setUserAuthInfo = (data, infoFromStorage) => {
    if (data?.token !== undefined && data?.token !== null) {
      setUserName(data?.name);
      localStorage.setItem('token', data?.token);
      localStorage.setItem('name', data?.name);
      setUserToken(data?.token);
      setAuthState(true);
    } else if (infoFromStorage?.token !== undefined && infoFromStorage?.token !== '') {
      localStorage.setItem('token', infoFromStorage?.token);
      localStorage.setItem('name', infoFromStorage?.name);
      setUserToken(infoFromStorage?.token);
      setUserName(infoFromStorage?.name);
      setAuthState(true);
    }
  };

  return (
    <GitHubInfo.Provider
      value={{ gitHubInfo, setGitHubInfo, gitHubAuth, setGitHubAuth, gitHubUserInfo, setGitHubUserInfo }}
    >
      <AuthContext.Provider
        value={{
          authState,
          setUserAuthInfo,
          isUserAuthenticated,
          userToken,
          userName,
        }}
      >
        {children}
      </AuthContext.Provider>
    </GitHubInfo.Provider>
  );
};

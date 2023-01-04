import { createContext, useContext, useState } from 'react';

export const GitHubInfo = createContext();

export const useGitHubInfo = () => {
  const context = useContext(GitHubInfo);
  return context;
};

export const Providers = ({ children }) => {
  const [gitHubInfo, setGitHubInfo] = useState(null);
  const [gitHubAuth, setGitHubAuth] = useState(null);

  return (
    <GitHubInfo.Provider value={{ gitHubInfo, setGitHubInfo, gitHubAuth, setGitHubAuth }}>
      {children}
    </GitHubInfo.Provider>
  );
};

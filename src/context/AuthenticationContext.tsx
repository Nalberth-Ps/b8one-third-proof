// Dependencies
import React, { useContext } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { UserToken } from '../pages/typings/auth';

type ContextProps = {
  userData: UserToken;
  setUserData(user: UserToken): void;
};

type AuthenticationContextProviderProps = {
  children: React.ReactNode;
};

export const AuthenticationContext = React.createContext<ContextProps>({} as ContextProps);

const AuthenticationContextProvider: React.FC<AuthenticationContextProviderProps> = ({ children }) => {
  const [userData, setUserData] = useLocalStorage('userData', {} as UserToken);

  return <AuthenticationContext.Provider value={{ userData, setUserData }}>{children}</AuthenticationContext.Provider>;
};

export const useAuth = () => {
  const { userData, setUserData } = useContext(AuthenticationContext);

  const isAuthenticated = !!userData?.token;
	const { token, user: { email, name } } = userData;

  return { token, email, name, isAuthenticated, setUserData };
};

export default AuthenticationContextProvider;
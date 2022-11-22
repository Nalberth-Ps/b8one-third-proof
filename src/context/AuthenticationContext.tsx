// Dependencies
import React, { useContext } from "react";
import { useLocalStorage } from 'usehooks-ts';
import { UserToken } from "../pages/typings/auth";

interface ContextProps {
	userData: UserToken,
	setUserData(user: UserToken): void
}

export const AuthenticationContext = React.createContext<ContextProps>({} as ContextProps);


type Props = {
  children: React.ReactNode
}

const AuthenticationContextProvider: React.FC<Props> = ({ children }) => {
  const [userData, setUserData] = useLocalStorage('userData', {} as UserToken);

	return (
		<AuthenticationContext.Provider value={{ userData, setUserData }}>
			{children}
		</AuthenticationContext.Provider>
	)
}

export const useAuth = () => {
  const { userData, setUserData } = useContext(AuthenticationContext);

  const isAuthenticated = !!userData?.token;

  return { userData, setUserData, isAuthenticated };
};

export default AuthenticationContextProvider;
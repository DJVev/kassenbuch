import { createContext } from 'react';

const UserContext = createContext({});
const { Provider } = UserContext;

export { UserContext, Provider as UserProvider };

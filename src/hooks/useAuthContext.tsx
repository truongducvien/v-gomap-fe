import { createContext, ReactNode, useContext } from 'react';

interface Props {
  children: ReactNode;
}

interface AuthContextType {
  isAuthenticated: boolean;
}

const initialValues: AuthContextType = { isAuthenticated: false };

const AuthContext = createContext<AuthContextType>(initialValues);

export const AuthProvider = ({ children }: Props) => {
  return (
    <AuthContext.Provider value={initialValues}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

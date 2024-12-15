import { API_ENDPOINT } from '@/constant';
import { authService } from '@/services';
import { SocialProvider } from '@/types';
import { getLS, removeLS, setLS } from '@/utils';
import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';

interface Props {
  children: ReactNode;
}

interface AuthContextType {
  isAuthenticated: boolean;
  handleLoginSocial: (provider: SocialProvider, redirect?: string) => void;
  handleLogin: (token: string) => void;
  handleLogOut: () => void;
}

const initialValues: AuthContextType = {
  isAuthenticated: false,
  handleLoginSocial: () => {},
  handleLogin: () => {},
  handleLogOut: () => {},
};

const AuthContext = createContext<AuthContextType>(initialValues);

export const AuthProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!getLS('access_token')
  );

  const handleLoginSocial = (provider: SocialProvider, redirect?: string) => {
    const redirectUrl = redirect ?? window?.location.origin;
    const socialLoginUrl = `${import.meta.env.VITE_API_URL}/${
      API_ENDPOINT.SOCIAL_LOGIN
    }/${provider}?redirect=${redirectUrl}`;
    window.open(socialLoginUrl, '_self');
  };

  const handleLogin = async (token: string) => {
    try {
      const logInRes = await authService.logIn(token);
      setLS('access_token', logInRes?.accessToken);
      setIsAuthenticated(true);
    } catch (error: any) {
      setIsAuthenticated(false);
      toast.error(error?.response?.data?.message || 'Login failed!');
      removeLS('access_token');
    }
  };

  const handleLogOut = () => {
    removeLS('access_token');
    removeLS('session_expired');
    setIsAuthenticated(false);
  };

  const contextValue: AuthContextType = {
    isAuthenticated,
    handleLoginSocial,
    handleLogin,
    handleLogOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

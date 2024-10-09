import { useAuthContext } from '@/hooks';
import { PATHS } from '@/routes/paths';
import { ReactNode, useEffect } from 'react';
import {
  Navigate,
  URLSearchParamsInit,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import * as qs from 'qs';

interface Props {
  children: ReactNode;
}

export default function AuthGuard({ children }: Props) {
  const { isAuthenticated, handleLogin } = useAuthContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const queryParams = qs.parse(location.search.replace('?', ''));
  const token = queryParams['token'] as string;

  useEffect(() => {
    if (!isAuthenticated && token) {
      handleLogin(token);
    } else if (isAuthenticated && token) {
      delete queryParams['token'];
      setSearchParams(queryParams as URLSearchParamsInit);
    }
  }, [location, isAuthenticated]);

  if (!isAuthenticated && !token) return <Navigate to={PATHS.GREETING} />;

  if (isAuthenticated) return children;
}

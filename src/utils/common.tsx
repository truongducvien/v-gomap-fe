import { setLS } from './localStorage';
import { PATHS } from '@/routes/paths';

export const handleUnauthorized = () => {
  setLS('session_expired', true);
  window.location.href = PATHS.GREETING;
};

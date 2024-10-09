import { Button } from '@/components/ui/button';
import { PATHS } from '@/routes/paths';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="text-center p-12">
      <h1 className="text-4xl">404 - Page Not Found</h1>
      <p className="text-lg py-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Button onClick={() => navigate(PATHS.HOME)}>Go to Homepage</Button>
    </div>
  );
}

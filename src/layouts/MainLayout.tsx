import { Header, StyledLayoutContainer } from '@/components';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <StyledLayoutContainer>
      <Header />
      <Outlet />
    </StyledLayoutContainer>
  );
}

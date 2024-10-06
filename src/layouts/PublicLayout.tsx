import { Header, StyledLayoutContainer } from '@/components';
import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
  return (
    <StyledLayoutContainer>
      <Header />
      <Outlet />
    </StyledLayoutContainer>
  );
}

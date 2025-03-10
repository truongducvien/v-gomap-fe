import tw from 'tailwind-styled-components';

export const StyledLayoutContainer = tw.div`
  flex
  flex-col
  max-w-[1440px]
  m-auto
  p-2
  md:p-5
  h-[100vh]
`;

export const StyledPageContainer = tw.div`
  flex-1
  overflow-scroll
`;

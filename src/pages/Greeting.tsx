import { StyledPageContainer } from '@/components';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useAuthContext } from '@/hooks';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@/routes/paths';
import { useEffect } from 'react';
import { getLS } from '@/utils';
import { toast } from 'react-toastify';
import GreetingImg from '@/assets/images/greeting.jpg';

export default function Greeting() {
  const { isAuthenticated, handleLoginSocial, handleLogOut } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const hasSessionJustExpired = !!getLS('session_expired');
    if (hasSessionJustExpired) {
      handleLogOut();
      toast.error('Session expired. Please login again!');
    }
  }, []);

  return (
    <StyledPageContainer>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col md:flex-1 justify-start md:justify-center gap-5">
          <div className="flex flex-col text-3xl md:text-6xl leading-[50px] md:leading-[70px] w-full lg:w-[80%] font-extrabold">
            <div className="text-secondary">
              Start sharing your travel album,
            </div>
            <div className="text-secondary">explore beautiful country!</div>
          </div>

          {isAuthenticated ? (
            <Button
              className="w-24 text-[16px] gap-2"
              onClick={() => navigate(PATHS.HOME)}
            >
              Go
              <FaLongArrowAltRight className="fill-#fff" />
            </Button>
          ) : (
            <div className="flex gap-6 w-full flex-wrap">
              <Button
                variant={'outline'}
                className="flex-1 md:max-w-[250px] gap-1"
                onClick={() => handleLoginSocial('google')}
              >
                <FcGoogle fontSize={24} />
                Login with Google
              </Button>
              <Button
                variant={'outline'}
                className="flex-1 md:max-w-[250px] gap-1"
                onClick={() => handleLoginSocial('facebook')}
              >
                <BiLogoFacebookCircle fontSize={24} fill="#0866FF" />
                Login with Facebook
              </Button>
            </div>
          )}
        </div>
        <div className="flex md:basis-1/2 lg:basis-2/5 items-center">
          <img src={GreetingImg} alt="Greeting_image" />
        </div>
      </div>
    </StyledPageContainer>
  );
}

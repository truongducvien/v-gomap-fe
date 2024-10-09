import { StyledPageContainer } from '@/components';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useAuthContext } from '@/hooks';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@/routes/paths';

export default function Greeting() {
  const { isAuthenticated, handleLoginSocial } = useAuthContext();
  const navigate = useNavigate();

  return (
    <StyledPageContainer>
      <div className="flex h-full">
        <div className="flex flex-col flex-1 justify-center gap-5">
          <div className="flex flex-col">
            <div className="text-6xl leading-[70px] w-[70%] font-extrabold text-secondary">
              Start sharing your travel album,
            </div>
            <div className="text-6xl leading-[70px] w-[70%] font-extrabold text-secondary">
              explore beautiful country!
            </div>
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
            <div className="flex gap-6">
              <Button
                variant={'outline'}
                className="gap-1"
                onClick={() => handleLoginSocial('google')}
              >
                <FcGoogle fontSize={24} />
                Login with Google
              </Button>
              <Button
                variant={'outline'}
                className="gap-1"
                onClick={() => handleLoginSocial('facebook')}
              >
                <BiLogoFacebookCircle fontSize={24} fill="#0866FF" />
                Login with Facebook
              </Button>
            </div>
          )}
        </div>
        <div className="basis-2/5"></div>
      </div>
    </StyledPageContainer>
  );
}

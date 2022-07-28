import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useRef } from 'react';

const GoogleLoginButton = () => {
  const router = useRouter();
  const loginButton = useRef<HTMLDivElement>(null);

  const handleLoginButtonClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation;
    router.push(
      'http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000/oauth/redirect'
    );
  };

  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" async defer />
      <Box
        id="g_id_onload"
        data-ux_mode="redirect"
        className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="filled_blue"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
        ref={loginButton}
        onClickCapture={handleLoginButtonClick}
      />
    </>
  );
};

export default GoogleLoginButton;

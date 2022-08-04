import { Box } from '@chakra-ui/react';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useRef } from 'react';

const { publicRuntimeConfig } = getConfig();

const GoogleLoginButton = () => {
  const router = useRouter();
  const loginButton = useRef<HTMLDivElement>(null);

  const handleLoginButtonClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    router.push(publicRuntimeConfig.googleLoginUrl);
  };

  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" async defer />
      <Box
        id="g_id_onload"
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
